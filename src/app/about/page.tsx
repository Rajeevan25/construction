import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import { siteConfig } from "@/config/site-content";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* About Hero */}
      <section className="relative min-h-[70vh] flex items-center px-6 md:px-24 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about/hero.jpg" 
            alt="About NorthStone" 
            className="w-full h-full object-cover opacity-30 grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto container">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">Our Heritage</span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase font-heading">
            Built on <span className="text-primary underline decoration-8 underline-offset-8">Bedrock</span>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            Rooted in the resilient spirit of Jaffna, we blend local craftsmanship with industrial precision to redefine the architectural landscape of the North.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="px-6 py-32 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-muted/30 p-12 md:p-20 rounded-3xl border-l-8 border-primary shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase font-heading tracking-tighter">The NorthStone Legacy</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light">
              For over two decades, NorthStone Constructions has stood as a testament to durability. What started as a small masonry collective in the heart of Jaffna has evolved into the region's leading construction firm. Our work isn't just about buildings; it's about restoring the architectural pride of our community.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="block text-5xl font-black text-primary font-heading">500+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Projects Completed</span>
              </div>
              <div>
                <span className="block text-5xl font-black text-primary font-heading">250+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-black">Skilled Artisans</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 relative min-h-[400px] overflow-hidden rounded-3xl group">
            <img 
              src="/images/about/heritage.jpg" 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              alt="Heritage Detail" 
            />
            <div className="absolute top-8 left-8 bg-background/80 backdrop-blur-md px-6 py-2 rounded-lg text-[10px] font-black tracking-[0.2em] uppercase text-white border border-border/20">
              Local Expertise
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 py-32 container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div>
            <span className="text-primary font-black tracking-[0.2em] uppercase text-[10px] mb-4 block">Our Visionaries</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter font-heading leading-none">Leadership</h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-right font-light italic">Guided by experience, driven by innovation. Meet the minds behind the NorthStone.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: "Ar. S. Thambidurai", role: "Founder & CEO", desc: "35+ Years in Structural Engineering", img: "/images/team/ceo.jpg" },
            { name: "Meera Ratnam", role: "Head of Operations", desc: "Expert in Sustainable Development", img: "/images/team/ops.jpg" },
            { name: "K. Jeyakumar", role: "Technical Director", desc: "Pioneer in High-Rise Foundations", img: "/images/team/director.jpg" }
          ].map((leader) => (
            <div key={leader.name} className="group overflow-hidden rounded-3xl bg-card border border-border/50 shadow-xl">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <div className="p-10 space-y-2">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{leader.role}</span>
                <h4 className="text-3xl font-black text-white uppercase font-heading tracking-tight">{leader.name}</h4>
                <p className="text-muted-foreground text-sm font-light">{leader.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
