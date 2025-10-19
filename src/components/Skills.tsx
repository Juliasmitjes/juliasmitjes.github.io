import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Palette, Zap, Database  } from "lucide-react";
import { motion } from 'motion/react';


const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "Angular", "Next.js", "Tailwind CSS", "Vite"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Creating beautiful user experiences", 
      skills: ["Figma", "Canva", "UI/UX Design"]
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Optimizing performance through data-driven insights",
      skills: ["Stata", "Pandas", "PostgreSQL"]
    },
    {
      icon: Zap,
      title: "Marketing & Automation",
      description: "Enhancing marketing efficiency with intelligent automation.",
      skills: ["HubSpot", "Jira", "Hootsuite" ]
    }
  ];

  return (
   <section className="relative py-24 px-6 overflow-hidden bg-backgroundTwo">
  {/* Decorative background elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-20" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">

    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
        Skills & Expertise
      </h2>
  
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        My toolkit for creating modern websites
      </p>
    </div>


    <div className="grid sm:grid-cols-2 gap-10">
      {skillCategories.map((category, index) => {
        const isLeftColumn = index % 2 === 0;
        return (
              <motion.div
            key={index}
            initial={{ x: isLeftColumn ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            <Card
              className={`group relative p-6 bg-card/50 border border-border/40 backdrop-blur-sm
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-primary/60`}
            >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/10 to-accent/10 blur-xl rounded-3xl" />

          <div className="relative flex items-start gap-4 mb-5 ">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white mt-1 sm:mt-0 shadow-md">
              <category.icon size={26} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-foreground text-start">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-start text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="text-xs px-2 py-1 bg-foreground/5 hover:bg-primary/20 transition"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
        </motion.div>
        )}   
      )}
    </div>
  </div>

    <div className="absolute bottom-0 left-0 w-full h-400 bg-gradient-to-b from-transparent via-background/50 to-background" />
</section>
  );
};

export default Skills;