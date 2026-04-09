"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-content";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav shadow-2xl shadow-black/40 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-white font-heading flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary transition-all duration-500">
            <Gem className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="hidden md:inline translate-y-0.5">{siteConfig.name}</span>
            <span className="md:hidden translate-y-0.5">NorthStone</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary/60 group-hover:text-primary transition-colors">Built for Jaffna</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-primary transition-colors duration-300 font-heading tracking-tight text-sm uppercase font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Button href="/contact" className="northstone-gradient text-primary-foreground font-bold uppercase tracking-wider text-xs px-6">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Link 
            href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, '')}`}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#f97316]/10 border border-[#f97316]/20 text-[#f97316] shadow-lg shadow-[#f97316]/5 active:scale-90 transition-all"
          >
            <Phone className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white active:scale-90 transition-all"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button href="/contact" className="northstone-gradient w-full py-6 text-primary-foreground font-bold uppercase">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
