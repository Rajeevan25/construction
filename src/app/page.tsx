"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import ProjectPortfolio from "@/components/sections/ProjectPortfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import LeadFormSection from "@/components/sections/LeadFormSection";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      
      <Hero />
      <Stats />
      <Services />
      
      {/* Why Choose Us Section - Injected for asymmetric layout as per original mockup */}
      <section className="bg-background py-32 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full northstone-gradient opacity-5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-10 lg:gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 liquid-copper opacity-10 rounded-full blur-[100px]" />
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-auto">
              <img 
                src="/images/architecture-detail.jpg" 
                alt="Architecture Detail" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-30" />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 glass-card p-6 md:p-10 rounded-2xl z-20 shadow-2xl max-w-[200px] md:max-w-xs border-primary/20"
            >
              <h4 className="text-primary font-black mb-4 uppercase text-[10px] tracking-[0.3em]">Heritage Insight</h4>
              <p className="text-white/80 text-sm font-light leading-relaxed">Every project honors the architectural legacy of Jaffna while embracing future-proof technology.</p>
            </motion.div>
          </motion.div>
          
          <div className="lg:w-1/2 space-y-12">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tight text-white mb-8 md:mb-12 uppercase font-heading leading-[0.9]"
            >
              The NorthStone <br /> <span className="text-primary">Edge</span>
            </motion.h2>
            <div className="space-y-10">
              {[
                { title: "Quality Materials", desc: "We source premium materials tested for the unique coastal climate of the Jaffna peninsula." },
                { title: "On-Time Delivery", desc: "Agile project management ensures we hand over keys exactly when promised." },
                { title: "Transparent Pricing", desc: "No hidden costs. Detailed breakdowns from foundation to finishing." }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-8 group"
                >
                  <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center shrink-0 group-hover:liquid-copper group-hover:text-primary-foreground transition-all duration-500 shadow-lg border-primary/10">
                    <span className="text-xl font-black">0{i+1}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-2 uppercase font-heading tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground/80 text-base font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectPortfolio />
      <Process />
      <Testimonials />
      <LeadFormSection />

      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
