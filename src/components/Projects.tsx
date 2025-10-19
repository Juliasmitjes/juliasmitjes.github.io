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
   <section
  id="projects"
  className="relative overflow-hidden bg-backgroundTwo text-foreground py-36 px-6"
>

  <div className="absolute top-0 left-0 w-full h-400 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-background via-backgroundTwo/70 to-transparent opacity-100" />
  </div>

  <div className="absolute inset-0 overflow-hidden pointer-events-none">

  </div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
      Recent Creations
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground mb-20 max-w-2xl mx-auto animate-fadeInUp opacity-90">
      A showcase of recent projects
    </p>

  
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fadeInUp"
      style={{ animationDelay: "0.3s" }}
    >
      {projects.map((project, index) => (
        <article
          key={index}
          className="group relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:-translate-y-3 hover:shadow-primary/30"
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-[340px] object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 text-left backdrop-blur-[8px] transition-all duration-500 group-hover:backdrop-blur-[6px]">
            <h3 className="text-2xl font-bold mb-2 text-foreground text-glow">
              {project.title}
            </h3>
            <p className="text-foreground text-sm mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.slice(0, 6).map((tech, tIdx) => (
                <Badge
                  key={tIdx}
                  variant="outline"
                  className="text-xs border-foreground/20 text-foreground/80"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                size="sm"
                asChild
                className="shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </Button>

              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={14} />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


  );
};

export default Projects;