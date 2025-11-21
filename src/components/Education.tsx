import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const timeline = [
    {
      year: "2024 - 2028",
      title: "B.E. in Electronics & Communication Engineering",
      institution: "Ramaiah Institute of Technology, Bangalore",
      achievement: "CGPA: 9.1",
      icon: GraduationCap,
      type: "Current",
    },
    {
      year: "2022 - 2024",
      title: "ICSE - 12th Grade",
      institution: "St. Claret School",
      achievement: "GPA: 9.3",
      icon: Award,
      type: "Completed",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -50,
        duration: 0.8,
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
    <section id="education" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic path and continuous learning in technology
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`timeline-item relative ${
                    index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                  } md:w-1/2`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-8 md:left-auto md:right-[-2.5rem] top-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background z-10">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>

                  <div className="ml-20 md:ml-0 bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {item.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.institution}</p>

                    <div className="flex items-center gap-2">
                      <Award className="text-primary" size={16} />
                      <span className="text-sm font-semibold gradient-text">
                        {item.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
