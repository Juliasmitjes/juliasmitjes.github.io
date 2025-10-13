import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Shapes */}
      <div className="floating-shape w-32 h-32 bg-primary top-20 left-20" style={{ animationDelay: '0s' }} />
      <div className="floating-shape w-20 h-20 bg-accent top-40 right-32" style={{ animationDelay: '2s' }} />
      <div className="floating-shape w-16 h-16 bg-primary top-60 left-1/3" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Frontend
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
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;