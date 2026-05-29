import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from '@/src/components/ui/RevealText';

export default function IntroStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative bg-[#0A0707] py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 relative w-full flex items-center">
        {/* Vertical gold line */}
        <motion.div 
          className="absolute left-6 md:left-12 top-0 w-px bg-[var(--color-brand-gold)]"
          style={{ height: lineHeight }}
        />
        
        <div className="pl-8 md:pl-24 w-full">
          <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] text-[#F5E9D3] max-w-4xl">
            <span className="block mb-2">
              <RevealText>We don't shoot weddings.</RevealText>
            </span>
            <span className="block mb-2 text-[#A89F8C]">
              <RevealText delay={0.4}>We compose memories</RevealText>
            </span>
            <span className="block">
              <RevealText delay={0.8}>that breathe forever.</RevealText>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
