import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Database, Server } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: "Frontend Development",
      description: "Building responsive, accessible, and performant user interfaces with React and Tailwind CSS."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Development",
      description: "Creating robust APIs and server-side logic using Node.js, Express, and modern databases."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Database Design",
      description: "Designing efficient schemas and managing data with PostgreSQL and MongoDB."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and self-documenting code following best practices."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mb-8" />
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am Vihanga Kavish, a passionate developer with a keen eye for detail and a drive for excellence. 
              My journey in tech is fueled by a desire to solve complex problems through elegant code.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I specialize in building 
              full-stack applications that are not only functional but also intuitive and delightful to use. 
              I am constantly learning and adapting to the latest industry trends to deliver the best solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">3+</h4>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">20+</h4>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex flex-col items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
