"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-content";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadFormSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-32 -mt-32 md:-mr-64 md:-mt-64" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 block"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black tracking-tighter text-white mb-8 md:mb-12 uppercase font-heading leading-none"
            >
              Start Your <br /> Project
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-md font-light">
              Ready to build something enduring? Our engineering team is standing by for a private consultation.
            </p>

            <div className="space-y-10">
              {[
                { icon: MapPin, label: "HQ Office", value: siteConfig.contact.address, href: null },
                { icon: Phone, label: "Contact", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}` },
                { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xs uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground text-sm font-light hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm font-light">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-card p-6 md:p-10 lg:p-16 rounded-3xl border border-border/50 shadow-2xl relative"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-muted border border-border/10 rounded-xl p-5 text-white focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all"
                    placeholder="Arjun Ratnam"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-muted border border-border/10 rounded-xl p-5 text-white focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all"
                    placeholder="+94 ..."
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Project Type</label>
                <select className="w-full bg-muted border border-border/10 rounded-xl p-5 text-white focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all appearance-none cursor-pointer">
                  <option>Residential Villa</option>
                  <option>Commercial Complex</option>
                  <option>Heritage Restoration</option>
                  <option>Industrial Infrastructure</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-muted border border-border/10 rounded-xl p-5 text-white focus:ring-2 focus:ring-primary/40 focus:outline-none transition-all resize-none"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <Button size="lg" className="w-full northstone-gradient py-8 rounded-xl text-primary-foreground font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all text-sm">
                Send Inquiry
              </Button>
            </form>
            
            <p className="text-[10px] text-muted-foreground text-center mt-8 uppercase tracking-widest font-bold">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
