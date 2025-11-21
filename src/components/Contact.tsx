import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chowdhurydipanjan173@gmail.com",
      href: "mailto:chowdhurydipanjan173@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9674606979",
      href: "tel:+919674606979",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors duration-300"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-lg font-semibold hover:gradient-text transition-all duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Available for freelance projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Open to internship opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Interested in full-stack development roles
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  Response time: Within 24 hours
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full gradient-bg group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
