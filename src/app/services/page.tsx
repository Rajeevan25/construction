import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import { siteConfig } from "@/config/site-content";
import { HardHat, Home, Building2, Ruler, Paintbrush, Hammer, Wrench, ShieldCheck, Map, ClipboardList } from "lucide-react";

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

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Services Hero */}
      <section className="relative min-h-[50vh] flex items-center px-6 md:px-24 py-32 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 block font-sans">What We Do</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase font-heading tracking-tighter leading-none mb-8">
            Engineering <br /> <span className="text-primary">Excellence</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light font-sans">
            Comprehensive construction solutions tailored for the Northern Peninsula's unique landscape and climate.
          </p>
        </div>
      </section>

      {/* Main Services Detail */}
      <section className="py-32 px-6 container mx-auto max-w-7xl">
        <div className="space-y-32">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || HardHat;
            return (
              <div 
                key={service.title} 
                className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="absolute inset-0 northstone-gradient opacity-10 rounded-3xl blur-3xl group-hover:opacity-20 transition-opacity" />
                  <div className="bg-card p-12 md:p-20 rounded-3xl border border-border/50 relative z-10 shadow-2xl overflow-hidden">
                    <Icon className="w-24 h-24 text-primary mb-12" />
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase font-heading tracking-tighter mb-8 leading-none">
                      {service.title}
                    </h3>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 font-sans">
                      {service.description}
                    </p>
                    <ul className="space-y-4 font-sans">
                      {["Structural Engineering", "Local Climate Optimization", "Sustainable Materials", "Precision Craftsmanship"].map((item) => (
                        <li key={item} className="flex items-center gap-4 text-sm text-foreground uppercase tracking-widest font-black">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                   <div className="aspect-[16/10] bg-muted rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000">
                     <img 
                       src={(service as any).image || "/images/projects/villa.jpg"} 
                       alt={service.title} 
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                     />
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
