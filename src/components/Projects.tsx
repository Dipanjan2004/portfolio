import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import agralensImage from "@/assets/project-agralens.jpg";
import chipsImage from "@/assets/project-chips.jpg";
import chessImage from "@/assets/project-chess.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "AgraLens",
      subtitle: "Smart Plant Disease Detection App",
      description:
        "An AI-powered Flutter application that helps farmers identify plant diseases through image scanning. Integrates TensorFlow models with Firebase backend for real-time predictions and provides insights on fertilizers, soil health, and growth optimization.",
      image: agralensImage,
      tech: ["Flutter", "Dart", "Firebase", "TensorFlow", "AI/ML"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Animated Chips Landing Page",
      subtitle: "High-Performance Web Animation",
      description:
        "A fully animated, visually striking landing page featuring scroll-triggered transitions and modular SCSS architecture. Showcases advanced GSAP animation techniques with smooth parallax effects and interactive elements.",
      image: chipsImage,
      tech: ["HTML5", "SCSS", "JavaScript", "GSAP", "Animation"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Realtime Chess Board",
      subtitle: "Multiplayer Game Platform",
      description:
        "An interactive 8×8 chessboard with real-time multiplayer synchronization using WebSockets. Built with a focus on system design and backend architecture, enabling seamless live gameplay between multiple users.",
      image: chessImage,
      tech: ["JavaScript", "Node.js", "Express", "WebSockets", "React"],
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and real-time systems
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group grid lg:grid-cols-2 gap-6 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              </div>

              <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-primary">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="lg" className="group/btn">
                    <Github className="mr-2 group-hover/btn:rotate-12 transition-transform" size={20} />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
