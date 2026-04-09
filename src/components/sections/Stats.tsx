"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site-content";

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Parse numeric value and suffix
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <span ref={ref} className="text-3xl md:text-5xl lg:text-[5rem] font-heading font-black text-white tracking-tighter transition-all duration-300 group-hover:text-primary">
      <motion.span>{displayValue}</motion.span>
      <span className="text-primary text-4xl ml-1">{suffix}</span>
    </span>
  );
};

const Stats = () => {
  return (
    <section className="bg-background py-32 border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 northstone-gradient opacity-5 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-24 relative z-10">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 relative group"
            >
              <Counter value={stat.value} />
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-[1px] bg-primary group-hover:w-10 transition-all duration-500" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-black">
                  {stat.label}
                </span>
              </div>
              
              {/* Vertical line accent */}
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent scale-y-0 group-hover:scale-y-150 transition-transform duration-700 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
