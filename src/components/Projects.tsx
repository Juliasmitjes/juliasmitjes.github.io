import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
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
    <section className="py-20 px-4 bg-backgroundTwo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground font-bold mb-4 text-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative h-48 bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;