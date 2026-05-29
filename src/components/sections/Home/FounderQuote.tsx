import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { asset } from '@/src/lib/assets';

export default function FounderQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0A0707] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          <div className="w-full md:w-2/5 aspect-[4/5] relative overflow-hidden">
            <motion.img 
              style={{ y, scale: 1.1 }}
              src={asset('founder.jpg')} 
              alt="Founder" 
              className="w-full h-full object-cover grayscale-[20%]"
              onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjMTUxMDBFIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIvPjwvc3ZnPg=='; }}
            />
          </div>

          <div className="w-full md:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-accent text-[clamp(2rem,3vw,3.5rem)] text-[#F5E9D3] leading-[1.3] mb-12">
                "A wedding lasts a day. A film lasts forever. We exist for that forever."
              </h3>
              
              <div className="pl-6 border-l w-max border-[#D4AF37]/50">
                <p className="font-sans text-[#F5E9D3] tracking-wide mb-1">Gaurav Arora</p>
                <p className="font-sans text-[0.65rem] text-[#A89F8C] uppercase tracking-widest">Creative Director</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
