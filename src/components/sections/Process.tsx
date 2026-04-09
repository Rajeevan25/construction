"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-content";
import { MessageSquare, PenTool, FileCheck, HardHat, Key } from "lucide-react";

const iconMap = {
  MessageSquare: MessageSquare,
  PenTool: PenTool,
  FileCheck: FileCheck,
  HardHat: HardHat,
  Key: Key,
};

const Process = () => {
  return (
    <section className="bg-muted/30 py-32 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tight text-white mb-24 uppercase text-center font-heading"
        >
          The NorthStone Process
        </motion.h2>

        <div className="relative">
          {/* Progress Rail (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-full h-full northstone-gradient origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {siteConfig.process.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full northstone-gradient flex items-center justify-center mb-10 shadow-2xl ring-8 ring-background group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-4 -right-4 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-[10px] font-black text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="text-white font-black mb-4 uppercase text-xs tracking-widest font-heading">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-xs px-4 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
