import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { siteConfig } from "@/config/site-content";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Contact Hero */}
      <section className="relative min-h-[40vh] flex items-center px-6 md:px-24 pt-32 bg-muted/10">
        <div className="container mx-auto max-w-7xl">
          <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-6 block font-sans">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase font-heading tracking-tighter leading-none">
            Let's <span className="text-primary">Connect</span>.
          </h1>
        </div>
      </section>

      {/* Reuse the conversion-optimized lead form */}
      <LeadFormSection />

      {/* Map Section */}
      <section className="pb-32 px-6 container mx-auto max-w-7xl">
        <div className="rounded-3xl overflow-hidden h-[500px] relative border border-border/50">
          <iframe
            title="NorthStone Constructions — Jaffna HQ"
            src="https://maps.google.com/maps?q=Temple+Road,+Jaffna,+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Address overlay */}
          <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md border border-border/60 rounded-2xl px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-black text-sm uppercase tracking-widest">{siteConfig.contact.address}</p>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-0.5">Jaffna HQ Office</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
