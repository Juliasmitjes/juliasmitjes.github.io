import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Creating beautiful and intuitive user experiences", 
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Wireframing"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Responsive",
      description: "Ensuring seamless experiences across all devices",
      skills: ["Responsive Design", "PWA", "Mobile-First", "Cross-Browser", "Performance"]
    },
    {
      icon: Zap,
      title: "Tools & Optimization",
      description: "Leveraging modern tools for efficient development",
      skills: ["Vite", "Webpack", "Git", "Testing", "CI/CD"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-glow">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="skill-gradient p-3 rounded-lg">
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-start">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;