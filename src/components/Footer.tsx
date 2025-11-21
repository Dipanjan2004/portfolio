import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Dipanjan</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer crafting beautiful and functional digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/Dipanjan2004" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dipan04/" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:chowdhurydipanjan173@gmail.com" className="p-3 bg-background border border-border rounded-lg hover:border-primary transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            Dipanjan Chowdhury
•

            <span className="mx-2">•</span>
            <span>{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;