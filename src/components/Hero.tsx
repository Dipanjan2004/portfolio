import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-primary">Available for opportunities</span>
            </div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hey, I'm
              <br />
              <span className="gradient-text">Dipanjan</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-muted-foreground font-light"
            >
              Full-Stack Developer & ECE Student
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl">
            I specialize in building scalable, interactive web applications and cross-platform solutions. 
            Currently diving deep into Node.js, APIs, and backend architecture while crafting beautiful 
            frontend experiences with React, GSAP, and Flutter.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gradient-bg group">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:chowdhurydipanjan173@gmail.com"
              className="p-3 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-lg opacity-20 blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="text-xl font-semibold">Currently Building</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  Real-time multiplayer systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  AI-powered mobile applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  Animated web experiences
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
