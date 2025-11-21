import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Database, Smartphone, Wrench, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Java", "Python", "C++", "Dart", "JavaScript"],
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "SCSS", "GSAP"],
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      skills: ["Flutter", "Firebase Integration", "Cross-platform"],
    },
    {
      icon: Wrench,
      title: "Tools & Tech",
      skills: ["Git", "GitHub", "VS Code", "Neovim", "Postman", "Figma"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Collaboration", "Communication", "Problem-solving", "Adaptability"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="skill-card group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-sm rounded-full border border-border hover:border-primary transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "3+" },
            { label: "Technologies", value: "15+" },
            { label: "CGPA", value: "9.1" },
            { label: "Years of Learning", value: "2+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
