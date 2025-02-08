import { Github, Linkedin, Mail } from "lucide-react";
const SocialLinks = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="flex justify-center gap-8">
          <a
            href="mailto:ph.ahrendt@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/phiahr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/philippahrendt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default SocialLinks;