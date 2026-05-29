import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { asset } from '@/src/lib/assets';

export default function SignatureReel() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <section className="bg-[#0A0707] py-24 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          className="relative w-full aspect-video md:aspect-[21/9] bg-[#15100E] overflow-hidden cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleSound}
        >
          <video
            src={asset('signature-reel.mp4')} // Using fallback asset for now, assuming standard naming
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className={`w-full h-full object-cover transition-all duration-700 ${!isHovered && isMuted ? 'grayscale-[30%] opacity-80' : 'grayscale-0 opacity-100'}`}
          />
          
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-500 ${isHovered && isMuted ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-[var(--color-brand-gold)] font-sans text-[0.65rem] tracking-[0.3em] uppercase flex items-center gap-3 border border-[var(--color-brand-gold)]/50 px-6 py-3 backdrop-blur-sm bg-black/20">
              <span className="w-0.5 h-3 bg-[var(--color-brand-gold)] animate-pulse" />
              PLAY WITH SOUND
            </div>
          </div>
        </motion.div>
        
        <div className="mt-6 flex justify-between items-center text-[#A89F8C] font-sans uppercase tracking-[0.2em] text-[0.65rem]">
          <p>The 2024 Reel</p>
          <p>1:48</p>
        </div>
      </div>
    </section>
  );
}
