import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { asset } from "@/src/lib/assets";
import { Button } from "@/src/components/ui/Button";
import { RevealText } from "@/src/components/ui/RevealText";

const Stat = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart 
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left border-l border-[#D4AF37]/30 pl-6">
      <div className="font-display text-4xl md:text-6xl text-[#D4AF37] mb-2">{count}{suffix}</div>
      <div className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#A89F8C]">{label}</div>
    </div>
  );
};

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="bg-[#0A0707] min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-24 px-6 max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 aspect-[3/4] overflow-hidden relative">
             <motion.img 
                style={{ y: yImage, scale: 1.1 }}
                src={asset('founder.jpg')}
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Founders" 
             />
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <p className="mb-6 text-[0.65rem] uppercase tracking-[0.5em] text-[#D4AF37]">
              Our Story
            </p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-[#F5E9D3] leading-none mb-8">
              <RevealText>The Storytellers Behind GA</RevealText>
            </h1>
            <p className="font-sans text-lg text-[#A89F8C] leading-relaxed max-w-md">
              We believe in the power of the unseen moments. The nervous breath before the reveal, the tear wiped away in the crowd.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-[#15100E]">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-24">
            {[
              "It started with a simple belief: weddings are not just events, they are the culmination of legacies, families, and destiny. We wanted to bottle that magic.",
              "For over 8 years, GA Studio has traveled the globe, chasing light and emotion. We don't direct your day; we observe, we anticipate, and we capture the authentic truth of your celebration.",
              "When you look back at your film in twenty years, we want you to feel exactly how you felt in that moment. Not just how it looked, but how it felt."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-0 top-0 font-display text-4xl text-[#D4AF37]/30 leading-none">0{i+1}</div>
                <p className="font-sans text-xl md:text-2xl text-[#F5E9D3] leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5E9D3] leading-none mb-4">Our Philosophy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Emotion", desc: "The core of our work. We look for the feeling over the pose." },
            { title: "Craft", desc: "Uncompromising quality in every frame, color grade, and sound mix." },
            { title: "Timelessness", desc: "Editing that eschews passing trends for classic cinematic elegance." }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-[#D4AF37]/15 p-12 text-center bg-[#0A0707] hover:border-[#D4AF37]/50 transition-colors"
            >
              <h3 className="font-accent text-3xl text-[#D4AF37] mb-6">{pillar.title}</h3>
              <p className="font-sans text-sm text-[#A89F8C]">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Numbers */}
      <section className="py-24 bg-[#15100E] border-y border-[#D4AF37]/15">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
             <Stat value={250} label="Weddings" suffix="+" />
             <Stat value={8} label="Years" />
             <Stat value={14} label="Cities" />
             <Stat value={6} label="Countries" />
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32 px-6 max-w-[1440px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#F5E9D3] leading-none mb-4">The Collective</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Rahul Singh", role: "Lead Cinematographer", speed: -20 },
            { name: "Sneha Patel", role: "Creative Director", speed: 10 },
            { name: "Amit Kumar", role: "Lead Photographer", speed: -10 },
            { name: "Priya Sharma", role: "Editor", speed: 20 }
          ].map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-[#15100E]">
                <img 
                  src={asset(`team-${i+1}.jpg`)} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMTUxMDBFIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIvPjwvc3ZnPg==`; }}
                />
              </div>
              <div>
                <h4 className="font-display text-2xl text-[#F5E9D3]">{member.name}</h4>
                <p className="font-sans text-[0.65rem] text-[#D4AF37] uppercase tracking-[0.2em] mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0A0707] text-center border-t border-[#D4AF37]/15">
        <h2 className="font-display text-[clamp(2.5rem,4vw,4rem)] text-[#F5E9D3] mb-8">Meet Us in Person</h2>
        <Link to="/book">
          <Button variant="primary">Book Consultation</Button>
        </Link>
      </section>
    </main>
  );
}
