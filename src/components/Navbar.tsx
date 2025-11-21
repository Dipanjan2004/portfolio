import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for mobile menu
  useGSAP(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { 
            height: 0, 
            opacity: 0,
            y: -20
          },
          { 
            height: "auto", 
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out"
          }
        );
        
        // Animate menu items
        gsap.fromTo(
          mobileMenuRef.current.children,
          { 
            opacity: 0,
            x: -20
          },
          { 
            opacity: 1,
            x: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.2
          }
        );
      } else if (mobileMenuRef.current.style.height !== "") {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power3.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  // GSAP animation for hamburger icon
  useGSAP(() => {
    if (menuIconRef.current) {
      gsap.to(menuIconRef.current, {
        rotation: isMobileMenuOpen ? 90 : 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg" 
          : "bg-background/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold gradient-text">
            Dipanjan
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="gradient-bg">
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuIconRef}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden pb-6 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="gradient-bg w-full">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
