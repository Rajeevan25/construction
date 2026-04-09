"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const INITIAL_IMAGES = [
  {
    id: 1,
    src: "/images/hero/hero_premium.png",
    alt: "Modern NorthStone architecture",
    title: "Architectural Excellence",
  },
  {
    id: 2,
    src: "/images/hero/hero_premium_2.png",
    alt: "Luxury Minimalist Villa",
    title: "Modern Living",
  },
  {
    id: 3,
    src: "/images/hero/hero_premium_3.png",
    alt: "Commercial Glass Hub",
    title: "Urban Innovation",
  },
  {
    id: 4,
    src: "/images/hero/hero_premium_4.png",
    alt: "Luxury Interior Design",
    title: "Interior Mastery",
  },
  {
    id: 5,
    src: "/images/hero/hero_premium_5.png",
    alt: "Aerial Construction Site",
    title: "Precision Engineering",
  },
];

const AUTO_PLAY_INTERVAL = 8000;

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(INITIAL_IMAGES[0]);
  const [queue, setQueue] = useState(INITIAL_IMAGES.slice(1));
  const [progress, setProgress] = useState(0);

  const rotateImages = useCallback(() => {
    setQueue((prevQueue) => {
      const nextHero = prevQueue[0];
      const newQueue = [...prevQueue.slice(1), currentHero];
      setCurrentHero(nextHero);
      return newQueue;
    });
    setProgress(0);
  }, [currentHero]);

  useEffect(() => {
    const timer = setInterval(rotateImages, AUTO_PLAY_INTERVAL);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / (AUTO_PLAY_INTERVAL / 100)), 100));
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [rotateImages]);

  return (
    <header className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Slider - Cinematic "Zoom Out" Effect */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentHero.id}
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              x: "30%",
              y: "20%",
              clipPath: "inset(20% round 20px)" 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              y: 0,
              clipPath: "inset(0% round 0px)"
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" }
            }}
            transition={{ 
              duration: 2, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentHero.src}
              alt={currentHero.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle local gradient for text readability - keeping it pristine */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent pointer-events-none z-[1]" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] uppercase tracking-[0.4em] text-[10px] font-black backdrop-blur-sm">
              {currentHero.title}
            </span>
          </motion.div>

          <motion.h1 
            key={`title-${currentHero.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold leading-[0.8] tracking-tight text-white mb-8 font-heading drop-shadow-2xl"
          >
            Building The <br />
            <span className="text-[#f97316] font-black">Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl mb-12 font-sans font-light leading-relaxed tracking-tight drop-shadow-lg"
          >
            Pioneering architectural precision and heritage restoration across the Jaffna peninsula.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-6"
          >
            <Button href="/contact" size="lg" className="liquid-copper py-8 px-12 rounded-xl text-primary-foreground font-black uppercase tracking-widest text-sm group shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] transition-all duration-500">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              href="/projects"
              variant="outline" 
              size="lg" 
              className="bg-background/10 backdrop-blur-md border-white/20 hover:bg-white/10 py-8 px-12 rounded-xl text-white font-black uppercase tracking-widest text-sm transition-all"
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Up Next Thumbnail Strip - Bottom Right */}
      <div className="absolute bottom-6 right-4 md:bottom-12 md:right-12 lg:right-24 z-20 hidden xl:flex flex-col items-end gap-3">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black translate-x-1/2 -rotate-90 origin-bottom-right mb-4">
          Up Next
        </span>
        <div className="flex -space-x-8 md:-space-x-10 hover:-space-x-2 transition-all duration-700">
          {queue.map((img, idx) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: idx === 0 ? 1.1 : 1,
                zIndex: INITIAL_IMAGES.length - idx
              }}
              exit={{ opacity: 0, scale: 0.8, x: -50 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                layout: { duration: 0.8, ease: "easeOut" }
              }}
              className={`relative flex-shrink-0 transition-all duration-500 rounded-xl overflow-hidden border-2 shadow-2xl ${
                idx === 0
                  ? "w-32 h-24 md:w-40 md:h-28 lg:w-56 lg:h-36 border-primary/50 ring-4 ring-primary/20"
                  : "w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 border-white/10 grayscale-[60%] hover:grayscale-0"
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
              />
              
              {/* Progress interaction on lead thumbnail */}
              {idx === 0 && (
                <>
                  <div className="absolute bottom-0 left-0 h-1.5 bg-[#f97316] w-full origin-left shadow-[0_0_10px_#f97316]"
                       style={{ transform: `scaleX(${progress / 100})` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] text-[#f97316] font-black uppercase tracking-widest mb-1">Coming Up</span>
                    <span className="text-white text-[12px] font-bold line-clamp-1">{img.title}</span>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none sm:hidden"
      >
        <span className="text-[9px] text-white/40 uppercase tracking-[0.5em] font-black">Explore</span>
        <div className="relative w-px h-16 bg-white/10 overflow-hidden">
          <motion.div 
            animate={{ 
              top: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#f97316] to-transparent"
          />
        </div>
      </motion.div>

      {/* Mobile-Only Progress Bar at extremely bottom to link slides */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-30 sm:hidden">
        <motion.div 
          className="h-full bg-[#f97316] shadow-[0_0_15px_#f97316]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          style={{ originX: 0 }}
          transition={{ type: "tween", ease: "linear" }}
        />
      </div>
    </header>
  );
};

export default Hero;
