import { ArrowRight, Github, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-green.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 border border-primary/20 uppercase tracking-widest glass">
              <Sparkles className="h-3 w-3" />
              Available for new projects
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-primary to-green-300 text-glow">Vihanga Kavish</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Crafting the next generation of <span className="text-foreground font-medium">digital experiences</span>. 
            I engineer performant web applications with precision and soul.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-2xl glass hover:bg-white/5 hover:scale-105 transition-transform active:scale-95">
              Get Resume <Download className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </section>
  );
}
