import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { asset } from '@/src/lib/assets';
import { Button } from '@/src/components/ui/Button';
import { RevealText } from '@/src/components/ui/RevealText';

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section ref={containerRef} className="relative h-screen bg-[#0A0707] overflow-hidden flex items-center justify-center border-t border-[#D4AF37]/15">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video 
          src={asset('services.mp4')} 
          muted 
          loop 
          autoPlay 
          playsInline
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0707] via-transparent to-[#0A0707]" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <h2 className="font-display text-[clamp(3rem,6vw,6rem)] text-[#F5E9D3] leading-none mb-6">
          <RevealText>Let's Create Yours.</RevealText>
        </h2>
        <p className="font-sans text-[#A89F8C] md:text-lg mb-12 max-w-md mx-auto">
          We take only 24 weddings per year. Reserve your date.
        </p>
        
        <Link to="/book">
          <Button variant="primary">Begin the Conversation</Button>
        </Link>
        
        <div className="mt-8 flex items-center justify-center gap-3 text-[0.65rem] tracking-[0.2em] text-[#A89F8C] uppercase">
          <a href="https://wa.me/919876543210" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#128C7E] animate-pulse" />
            or message us instantly
          </a>
        </div>
      </div>
    </section>
  );
}
