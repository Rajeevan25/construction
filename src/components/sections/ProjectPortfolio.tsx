"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site-content";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = ["All Projects", "Residential", "Commercial", "Heritage"];

const ProjectPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = siteConfig.projects.filter(project => 
    activeCategory === "All Projects" ? true : project.category === activeCategory
  ).slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tight text-white mb-12 uppercase font-heading"
          >
            Signature Portfolio
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((tag, i) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(tag)}
                className={cn(
                  "px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all relative overflow-hidden",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]",
                  index === 0 && filteredProjects.length > 2 ? "md:col-span-2 md:aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto" : ""
                )}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">
                    {project.category} • {project.status}
                  </span>
                  <h3 className={cn(
                    "font-black text-white mb-1 uppercase tracking-tight font-heading leading-none group-hover:text-primary transition-colors",
                    index === 0 && filteredProjects.length > 2 ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
                  )}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-sans tracking-widest text-[10px] uppercase">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/projects">
            <button className="px-12 py-5 rounded-2xl northstone-gradient text-white font-black uppercase tracking-widest text-[12px] hover:scale-105 transition-all shadow-xl shadow-primary/20">
              View All Projects
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
