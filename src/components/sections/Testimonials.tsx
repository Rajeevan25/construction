"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NorthStone Constructions transformed our ancestral land into a contemporary masterpiece. Their attention to structural integrity is unmatched in the region.",
    author: "S. Balasubramaniam",
    role: "Estate Owner",
  },
  {
    quote: "Professionalism at every step. From the initial 3D designs to the final coat of paint, they were transparent about timelines and materials.",
    author: "K. Rathnayake",
    role: "Commercial Developer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tight text-white mb-24 uppercase font-heading"
        >
          Voices of Trust
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-12 rounded-3xl relative overflow-hidden group border border-border/50"
            >
              <Quote className="w-16 h-16 text-primary/10 absolute top-8 right-8 group-hover:scale-110 transition-transform duration-500" />
              
              <p className="text-xl md:text-2xl text-white italic mb-12 leading-relaxed font-light relative z-10">
                "{t.quote}"
              </p>
              
              <div className="relative z-10">
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">
                  {t.author}
                </h4>
                <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
