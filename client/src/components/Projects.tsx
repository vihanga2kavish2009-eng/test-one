import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Neon Commerce",
      description: "A high-performance storefront with real-time inventory and encrypted checkout.",
      tags: ["React", "Node.js", "GreenSock", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Flow Studio",
      description: "Collaborative canvas for design teams with multi-player editing features.",
      tags: ["Next.js", "TypeScript", "WebSockets", "Canvas"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Vitals Dash",
      description: "Health tracking dashboard with biometric data visualization and alerts.",
      tags: ["D3.js", "Firebase", "React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Selected Works</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Merging aesthetics with functionality. Each project is a deep dive into solving specific user problems with elegant engineering.
            </p>
          </div>
          <Button variant="ghost" className="shrink-0 text-primary hover:text-primary hover:bg-primary/10 font-bold">
            All Creations <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/40 glass group hover:border-primary/50 transition-all duration-500 rounded-3xl shadow-2xl hover:shadow-primary/5">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur p-2 rounded-full border border-white/10">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-2xl font-black">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex gap-4 p-6 pt-0">
                  <Button variant="ghost" size="sm" className="flex-1 rounded-xl hover:bg-primary/5 hover:text-primary transition-colors font-bold" asChild>
                    <a href={project.githubUrl}><Github className="mr-2 h-4 w-4" /> Repo</a>
                  </Button>
                  <Button size="sm" className="flex-1 rounded-xl shadow-lg shadow-primary/10 font-bold" asChild>
                    <a href={project.liveUrl}>Preview</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
