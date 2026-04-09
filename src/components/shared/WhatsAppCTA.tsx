"use client";

import { siteConfig } from "@/config/site-content";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const WhatsAppCTA = () => {
  return (
    <motion.a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-[60] whatsapp-gradient w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group active:scale-90 duration-200"
    >
      <MessageCircle className="text-white w-8 h-8 fill-current" />
      
      <div className="absolute right-16 md:right-20 bg-card border border-border px-4 py-2 rounded-lg text-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl pointer-events-none hidden sm:block">
        Chat with an Engineer
        <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-card border-r border-t border-border rotate-45" />
      </div>
    </motion.a>
  );
};

export default WhatsAppCTA;
