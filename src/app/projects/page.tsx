"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import { siteConfig } from "@/config/site-content";
import { cn } from "@/lib/utils";

const categories = ["All Projects", "Residential", "Commercial", "Heritage"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = siteConfig.projects.filter(project => 
    activeCategory === "All Projects" ? true : project.category === activeCategory
  );

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Projects Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center px-6 md:px-12 lg:px-24 pt-28 pb-16 md:pt-32 md:pb-20 bg-muted/10 overflow-hidden">
        <div className="absolute inset-0 northstone-gradient opacity-10 blur-[100px] -z-10" />
        <div className="container mx-auto max-w-7xl relative">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 block font-sans"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black text-white uppercase font-heading tracking-tighter leading-none mb-8"
          >
            Signature <br /> <span className="text-primary italic">Portfolio</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl font-light font-sans"
          >
            A curated showcase of architectural monuments that define the modern landscape of Jaffna.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 border-y border-border/10 bg-muted/5"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {categories.map((tag, i) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCategory(tag)}
                className={cn(
                  "px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all",
                  activeCategory === tag
                  ? "northstone-gradient text-primary-foreground shadow-lg scale-105" 
                  : "bg-muted text-muted-foreground hover:text-white hover:bg-muted/80"
                )}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-32 px-6 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-3xl relative mb-8 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-lg text-[10px] font-black tracking-[0.2em] uppercase text-white border border-border/20">
                    {project.category}
                  </div>
                  <div className="absolute bottom-6 right-6">
                     <div className={`px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-widest ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-primary/20 text-primary border border-primary/30'}`}>
                       {project.status}
                     </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl md:text-3xl lg:text-5xl font-black text-white uppercase font-heading tracking-tighter mb-2 leading-none group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-sans tracking-[0.2em] text-xs uppercase font-medium">
                      {project.location}
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to action for project */}
      <section className="py-32 container mx-auto max-w-7xl px-6">
        <div className="northstone-gradient rounded-3xl p-8 md:p-12 lg:p-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 shadow-2xl shadow-primary/20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-primary-foreground leading-[0.9] mb-6 uppercase font-heading tracking-tighter">
              Ready to Build Your <br /> Legacy in Jaffna?
            </h2>
            <p className="text-primary-foreground/80 text-lg font-medium font-sans">
              Connect with our local experts today for a consultation on your next landmark project.
            </p>
          </div>
          <button className="bg-background text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-muted transition-colors text-sm shadow-xl">
            Download Portfolio (PDF)
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
