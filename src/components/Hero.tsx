import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow text-foreground">
            Web
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting beautiful, interactive web experiences with modern technologies. 
            Passionate about clean code and user-centered design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/80">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;