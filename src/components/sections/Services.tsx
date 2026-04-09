"use client";

import { motion } from "framer-motion";
import { HardHat, Home, Building2, Ruler, Paintbrush, Hammer, Map, ClipboardList } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site-content";

const iconMap = {
  Home: Home,
  Building2: Building2,
  Ruler: Ruler,
  Hammer: Hammer,
  HardHat: HardHat,
  Paintbrush: Paintbrush,
  Map: Map,
  ClipboardList: ClipboardList,
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 uppercase font-heading leading-none"
            >
              Our Engineering <br /> Disciplines
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              className="h-2 northstone-gradient rounded-full"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm text-lg font-light leading-relaxed"
          >
            From foundational structural work to intricate interior finishes, we build with local insight and global standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.slice(0, 4).map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || HardHat;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-3xl group hover:border-primary/50 transition-all duration-700 relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Icon className="w-10 h-10 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase font-heading tracking-tight leading-none group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground/80 mb-10 leading-relaxed font-light text-base line-clamp-3">
                    {service.description}
                  </p>
                  
                  <Link href="/services" className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    <span>Explore Service</span>
                    <div className="w-12 h-[1px] bg-primary" />
                  </Link>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 clip-path-polygon-[100%_0,100%_100%,0_0]" />
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-6 group"
          >
            <span className="text-xs font-black uppercase tracking-[0.5em] text-muted-foreground group-hover:text-primary transition-colors">View All Disciplines</span>
            <div className="w-20 h-[1px] bg-muted-foreground/30 group-hover:w-32 group-hover:bg-primary transition-all duration-700" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
