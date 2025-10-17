import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import websiteLicht from "../assets/websiteLicht.jpg";
import websiteWeer from "../assets/websiteWeer.png";
import websiteGame from "../assets/websiteGame.png";
import websiteBuild from "../assets/websiteBuild.png";

const Projects = () => {
  const projects = [
    {
      title: "Art Website",
      description: "A modern website for an art brand, featuring product listings, a contact form, and the ability to place orders.",
      technologies: ["React", "Next.js", "Typescript", "Tailwind", "Vercel", "PostgreSQL" ],
      image: websiteLicht,
      adjustObject: true,
      demoUrl: "https://lichtsculpturen.vercel.app/",
      githubUrl: "https://github.com/Juliasmitjes/12-websitenextgoede"
    },
    {
      title: "Website Builder Tool",
      description: "A web app that helps users design and build websites in five easy steps.",
      technologies: ["Angular", "Vite", "Typescript", "Tailwind", "Vercel"],
      image: websiteBuild,
      adjustObject: true,
      demoUrl: "https://my-app-dun-rho-17.vercel.app/",
      githubUrl: "https://github.com/Juliasmitjes/my-app"
    },
    {
      title: "Game Hub",
      description: "A platform to discover and play web-based games, complete with user reviews and ratings.",
      technologies: ["React", "Vite", "Typescript", "Tailwind"],
      image: websiteGame,
      adjustObject: false,
      demoUrl: "https://juliasmitjes.github.io/game-hub/#/",
      githubUrl: "https://github.com/Juliasmitjes/game-hub"
    },
    {
      title: "Weather App",
      description: "Weather application with location-based updates.",
      technologies: ["Vue.js", "Vite", "Typescript", "Tailwind",  "Weather API", ],
      image: websiteWeer,
      adjustObject: false,
      demoUrl: "https://juliasmitjes.github.io/weather-app/",
      githubUrl: "https://github.com/Juliasmitjes/weather-app"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4 bg-backgroundTwo overflow-hidden">

  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl text-foreground font-bold mb-6 text-glow">
        Recent Creations
      </h2>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        A curated showcase of recent work. User-friendly, interactive, and modern.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <article
          key={index}
          className="group relative overflow-hidden rounded-2xl p-0 shadow-lg transition-transform duration-500 hover:-translate-y-2 text-start"
          aria-labelledby={`proj-${index}-title`}
        >
     
          <div className="rounded-2xl bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 p-[1px]">
            <Card className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 p-0">
              <div className="md:flex">
                {/* Left: Image (desktop) */}
                <div className="relative md:w-1/2 h-56 md:h-[320px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 ${
                      project.adjustObject ? "object-[10%]" : ""}`} />
        
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                 

                  <div className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out">
                    <div className="backdrop-blur-sm bg-background/60 p-3 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <div className="font-medium text-foreground">{project.title}</div>
                      </div>
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-xs text-muted-foreground">
                          View →
                        </a>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 id={`proj-${index}-title`} className="text-lg md:text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 6).map((tech, tIdx) => (
                        <Badge key={tIdx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 mt-3">
                    <div className="flex gap-3">
                      <Button size="sm" asChild className="shadow-sm">
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      </Button>

                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                          <Github size={14} />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div> {/* md:flex */}
            </Card>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

  );
};

export default Projects;