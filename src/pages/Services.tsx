import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "@/src/lib/assets";
import { Button } from "@/src/components/ui/Button";
import { RevealText } from "@/src/components/ui/RevealText";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    id: 1, 
    title: 'The Wedding Film', 
    tag: 'Signature',
    desc: 'The complete cinematic experience of your grand day.',
    inclusions: ['Cinematic film (8-12 min)', 'Full traditional video', '500+ edited fine-art photos', 'Drone coverage', '2-day coverage'],
    video: 'film-1.mp4'
  },
  { 
    id: 2, 
    title: 'Pre-Wedding Shoot', 
    tag: 'Editorial',
    desc: 'Stylized, editorial shoots capturing your unique connection before the chaos begins.',
    inclusions: ['Concept development', '2 outfit changes', '1 location styling', 'Short film trailer', '100+ edited photos'],
    video: 'film-2.mp4'
  },
  { 
    id: 3, 
    title: 'Engagement / Roka', 
    tag: 'Intimate',
    desc: 'Intimate coverage for the quiet beginnings of your forever.',
    inclusions: ['Half-day coverage', '1 Cinematographer', '1 Photographer', '50+ edited photos', 'Highlight reel (1 min)'],
    video: 'film-3.mp4'
  },
  { 
    id: 4, 
    title: 'Reception', 
    tag: 'Grand',
    desc: 'Full evening coverage capturing the celebration, speeches, and party.',
    inclusions: ['Full evening coverage', 'Same-day edit reel', 'Speeches multi-cam setup', 'Optional live streaming'],
    video: 'signature-reel.mp4'
  },
];

export default function Services() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Basic pin effect for desktop
    const ctx = gsap.context(() => {
      containerRefs.current.forEach((container, i) => {
        if (!container) return;
        const media = container.querySelector('.service-media');
        
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": function() {
            gsap.to(media, {
              scrollTrigger: {
                trigger: container,
                start: "top top+=100",
                end: "bottom bottom",
                pin: media,
                pinSpacing: false,
              }
            });
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#0A0707] min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/15">
        <video 
          src={asset('services.mp4')} 
          autoPlay muted loop playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0707] via-transparent to-[#0A0707]" />
        
        <div className="relative z-10 text-center px-6 mt-24">
           <h1 className="font-display text-[clamp(2.5rem,6vw,6rem)] text-[#F5E9D3] leading-none mb-6">
             <RevealText>Crafted for Every Chapter</RevealText>
           </h1>
           <p className="font-sans text-lg text-[#A89F8C] max-w-2xl mx-auto">
             From the first laugh to the final blessing — we capture it all.
           </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        {services.map((svc, i) => (
          <div 
            key={svc.id} 
            ref={el => containerRefs.current[i] = el}
            className={`flex flex-col md:flex-row gap-12 md:gap-24 min-h-screen py-24 border-b border-[#D4AF37]/15 last:border-0 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto">
               <div className="service-media w-full h-[50vh] md:h-[70vh] rounded-sm overflow-hidden bg-[#15100E]">
                 <video 
                   src={asset(svc.video)} 
                   autoPlay muted loop playsInline
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 border border-[#D4AF37]/50 text-[#D4AF37] font-sans text-[0.65rem] uppercase tracking-[0.2em] w-max mb-8">
                {svc.tag}
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#F5E9D3] mb-6">{svc.title}</h2>
              <p className="font-sans text-[#A89F8C] text-lg mb-12">{svc.desc}</p>
              
              <ul className="space-y-6 mb-12 border-l border-[#D4AF37]/30 pl-6">
                {svc.inclusions.map((inc, j) => (
                  <motion.li 
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 }}
                    className="flex items-center gap-4 text-[#F5E9D3] font-sans text-sm tracking-wide"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    {inc}
                  </motion.li>
                ))}
              </ul>

              <Link to="/book">
                <Button variant="secondary">Enquire About This</Button>
              </Link>
            </div>
          </div>
        ))}
      </section>
      
      {/* Add-ons */}
      <section className="py-32 bg-[#15100E] border-t border-[#D4AF37]/15">
        <div className="max-w-[1440px] mx-auto px-6">
           <h2 className="font-display text-4xl text-[#F5E9D3] text-center mb-16">Bespoke Add-Ons</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="border border-[#D4AF37]/15 p-8 bg-[#0A0707]">
               <h3 className="font-accent text-2xl text-[#D4AF37] mb-4">Destination Coverage</h3>
               <p className="font-sans text-sm text-[#A89F8C]">Our travel team is equipped to capture your story anywhere in the world. We handle all logistics.</p>
             </div>
             <div className="border border-[#D4AF37]/15 p-8 bg-[#0A0707]">
               <h3 className="font-accent text-2xl text-[#D4AF37] mb-4">Fine Art Albums</h3>
               <p className="font-sans text-sm text-[#A89F8C]">Premium, handcrafted flush-mount albums printed on archival paper. A physical legacy of your day.</p>
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0A0707] text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[#F5E9D3] mb-8">Not sure which is right for you? Let's talk.</h2>
        <Link to="/book">
          <Button variant="primary">Book Consultation</Button>
        </Link>
      </section>
    </main>
  );
}
