import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5", "CSS3", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Figma", "VS Code", "Jest", "CI/CD", "Linux"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Agile Methodology", "Project Management"] },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical proficiency spans across the full stack development lifecycle, 
            enabling me to build comprehensive and scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
