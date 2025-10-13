import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A modern admin dashboard for managing online stores with real-time analytics and inventory management.",
      technologies: ["React", "TypeScript", "Tailwind", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking.",
      technologies: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "Custom portfolio website with smooth animations, dark mode, and responsive design.",
      technologies: ["Next.js", "Framer Motion", "SCSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      technologies: ["React", "Weather API", "Maps API", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4 bg-backgroundTwo overflow-hidden">
  {/* Decorative blobs */}
  <div className="pointer-events-none absolute -left-32 -top-20 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl opacity-40" />
  <div className="pointer-events-none absolute -right-28 bottom-10 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-accent/8 to-transparent blur-2xl opacity-30" />

  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl text-foreground font-bold mb-3 text-glow">
        Creations
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        A curated showcase of recent work — visual, interactive, and engineered for impact.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <article
          key={index}
          className="group relative overflow-hidden rounded-2xl p-0 shadow-lg transition-transform duration-500 hover:-translate-y-2"
          aria-labelledby={`proj-${index}-title`}
        >
          {/* gradient frame */}
          <div className="rounded-2xl bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 p-[1px]">
            <Card className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 p-0">
              <div className="md:flex">
                {/* Left: Image (desktop) */}
                <div className="relative md:w-1/2 h-56 md:h-[320px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                 

                  {/* subtle reveal meta on hover */}
                  <div className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out">
                    <div className="backdrop-blur-sm bg-background/60 p-3 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        <div className="font-medium text-foreground">{project.company ?? project.title}</div>
                        <div>{project.type ?? "Personal Project"}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">View →</div>
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