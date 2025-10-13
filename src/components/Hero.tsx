import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {

 const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};


  return (
   <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent" />

        {/* Content layout */}
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-6 py-32">

          {/* Left column — text */}
          <div className="flex-1 text-left animate-fade-in">
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
              Hi, I’m Julia — 
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Bringing
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> design and code  </span> together.
              <br /> 
            </h1>         

      <p className="text-lg text-muted-foreground mb-8 max-w-lg">
        I light up around good ideas and great people. From designing systems to debugging code, I'm all about mixing tech with taste.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button size="lg" className="bg-primary hover:bg-primary/80"
        onClick={() => scrollToSection("projects")}>
          View My Work
        </Button>
        <Button variant="outline" size="lg"
        onClick={() => scrollToSection("contact")}>
          Get In Touch
        </Button>
      </div>

      <div className="flex gap-6 mt-10">
        <a href="#" className="hover:text-primary transition-colors"><Github size={22} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={22} /></a>
        <a href="#" className="hover:text-primary transition-colors"><Mail size={22} /></a>
      </div>
    </div>

    {/* Right column — visual / animation */}
    <div className="flex-1 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <img
        src={heroImage}
        alt="developer at work"
        className="rounded-3xl shadow-2xl w-full h-auto object-cover animate-float-slow"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;