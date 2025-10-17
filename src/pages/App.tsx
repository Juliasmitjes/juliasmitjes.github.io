import '../styles/App.css'
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main >
        <section id="home" >
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>

      </main>
      
      <footer className="py-8 text-center text-muted-foreground border-t bg-background border-border/50">
        <p>&copy; {currentYear} Built with React & TypeScript</p>
      </footer>
    </div>
  );
};

export default App
