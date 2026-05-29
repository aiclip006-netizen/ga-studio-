import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const acts = [
  { id: 1, headline: 'Forever, Framed.', sub: 'A wedding film studio rooted in emotion.' },
  { id: 2, headline: 'Stories told in light.', sub: 'Cinema for the most important day of your life.' },
  { id: 3, headline: 'Yours, captured for always.', sub: 'Let us begin your story.' },
];

export default function HeroActs() {
  const [activeAct, setActiveAct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const vh = window.innerHeight;
      // Section is 300vh tall, sticky for full duration
      const progress = Math.min(Math.max(scrolled / (vh * 3), 0), 1);
      if (progress < 0.33) setActiveAct(0);
      else if (progress < 0.66) setActiveAct(1);
      else setActiveAct(2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={acts[activeAct].id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-center flex flex-col items-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#D4AF37]">
            GA Studio · Wedding Cinema
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,7.5rem)] leading-[0.95] text-[#F5E9D3] max-w-4xl">
            {acts[activeAct].headline}
          </h1>
          <p className="mt-8 text-base font-light tracking-wide text-[#A89F8C] md:text-lg">
            {acts[activeAct].sub}
          </p>
          {activeAct === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12"
            >
              <Link
                to="/book"
                className="inline-block border border-[#D4AF37] px-10 py-4 text-xs uppercase tracking-[0.4em] text-[#D4AF37] transition-all hover:bg-[#D4AF37] hover:text-[#0A0707]"
              >
                Book a Consultation
              </Link>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
