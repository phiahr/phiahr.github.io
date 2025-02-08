"use client"
import { Github, Linkedin, Mail } from "lucide-react";
import Image from 'next/image'

const Hero = () => {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8">
            <Image
              src="profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Philipp Ahrendt</h1>
          <h2 className="text-xl md:text-2xl text-primary mb-8">Autonomy Engineer </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl">
            Brief introduction about yourself and your expertise. Make it compelling and concise.
          </p> */}
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
  export default Hero;