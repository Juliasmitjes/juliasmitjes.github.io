import '../styles/App.css'
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
        toastClassName="z-9999"
      />

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
