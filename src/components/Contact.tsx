import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from 'motion/react';
import juliaSmitjes from '../assets/juliaSmitjes.jpg';


const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow text-foreground">
          Let's work together
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project.
        </p>
      </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2"
      >
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your name" className="bg-background/50" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-background/50" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <Input placeholder="Project inquiry" className="bg-background/50" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-background/50"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/80">
              Send Message
            </Button>
          </form>
        </Card>
      </motion.div>

      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Profile Image */}
        <Card className="overflow-hidden p-0 bg-card/50 backdrop-blur-sm border-border/50">
          <motion.img
            src= {juliaSmitjes} 
            alt="Julia Smitjes"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-40 mx-auto object-cover"
          />
        </Card>

        {/* Contact Info */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <span className="text-sm">julia.s@live.nl</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-primary" />
              <span className="text-sm">Utrecht, NL</span>
            </div>
          </div>
        </Card>

        {/* Socials */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex gap-4">
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
        </Card>

        {/* Availability */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h3 className="text-lg font-semibold mb-2">Let's Chat</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Available for freelance work and exciting opportunities.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-accent">Available for work</span>
          </div>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Contact;