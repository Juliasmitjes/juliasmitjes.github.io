import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from 'motion/react';
import juliaSmitjes from '../assets/juliaSmitjes.jpg';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
    } finally {
      setSending(false);
      setTimeout(() => setSent(false), 3500);
    }

    // dit nog doen!! 
    const contactInfo = [
      {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "julia.s@live.nl",
      href: "mailto:julia.s@live.nl"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefoonnummer", 
      details: "0614292489",
      href: "tel:+31614292489"
    },
    ]
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's work together</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-center">
            Ready to bring your ideas to life? Share a brief and I&apos;ll get back within 48 hours.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-card/60 backdrop-blur-sm border border-border/20 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1 block">Name</label>
                    <Input id="name" name="name" placeholder="Your name" className="bg-background/10" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1 block">Email</label>
                    <Input id="email" name="email" type="email" placeholder="you@email.com" className="bg-background/10" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-1 block">Subject</label>
                  <Input id="subject" name="subject" placeholder="Short project title" className="bg-background/10" />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea id="message" name="message" rows={6} placeholder="Tell me about scope, timeline & budget (optional)" className="bg-background/10" required />
                </div>

                <div className="flex items-center gap-4">
                  <Button type="submit" className="relative flex items-center justify-center px-6 py-2">
                    {sending ? 'Sending…' : sent ? 'Sent ✓' : 'Send Message'}
                  </Button>

                  <div className="text-sm text-muted-foreground">
                    <div>Typical reply within <strong>48 hours</strong></div>
                  </div>
                </div>

                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-md bg-foreground/6 p-3 text-sm"
                  >
                    Thanks — I&apos;ll reply shortly. ✅
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>

          {/* RIGHT: Profile / Contact */}
          <motion.aside
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <Card className="p-6 bg-card/55 backdrop-blur-sm border border-border/20 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden ring-2 ring-primary/25 mb-4 transition-transform transform hover:scale-105">
                  <img src={juliaSmitjes} alt="Julia Smitjes" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-lg font-semibold mb-2">Julia Smitjes</h3>
                <p className="text-sm text-muted-foreground mb-4">Web developer — Utrecht</p>

                <div className="w-full divide-y divide-border/30">
                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-primary" />
                      <a className="text-sm" href="mailto:julia.s@live.nl">julia.s@live.nl</a>
                    </div>
                  </div>

                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-primary" />
                      <span className="text-sm">Utrecht, NL</span>
                    </div>
                  </div>

                  <div className="py-3 flex items-center justify-center gap-4">
                    <a href="#" aria-label="Github" className="hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:julia.s@live.nl" aria-label="Email" className="hover:text-primary transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>

                  {/* Updated Availability section */}
                  <div className="pt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                      <div>
                        <div className="font-medium text-green-400">Open for new projects</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Simplified CTA section */}
            <Card className="mt-6 p-5 bg-card/50 backdrop-blur-sm border border-border/15 text-center">
              <h4 className="font-semibold mb-1">Let's connect</h4>
              <p className="text-sm text-muted-foreground mb-4">Interested in working together or have questions? Let's talk.</p>
              <Button className="px-5 py-2 w-full">Schedule a call</Button>
            </Card>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}