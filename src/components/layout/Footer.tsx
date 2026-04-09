import Link from "next/link";
import { siteConfig } from "@/config/site-content";
import { Globe, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="space-y-6">
          <div className="text-xl font-black text-white uppercase tracking-tighter decoration-primary underline-offset-8">
            {siteConfig.name}
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Architectural masterpieces designed for endurance. Building the North with uncompromising quality since 2009.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
              <Globe className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer">
              <Mail className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Core Services</h4>
          <nav className="flex flex-col gap-3">
            {["Industrial Build", "Luxury Residence", "Renovation", "Interior Design"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-muted-foreground hover:text-white transition-all hover:translate-x-1 text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            {["Privacy Policy", "Terms of Service", "Local Heritage", "Careers"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-muted-foreground hover:text-white transition-all hover:translate-x-1 text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Get the latest construction insights from the North.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-muted border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary text-foreground"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            <span>Licence: NSC-2009-LK</span>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
