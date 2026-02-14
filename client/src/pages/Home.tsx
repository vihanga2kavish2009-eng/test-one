import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-background border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Vihanga Kavish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
