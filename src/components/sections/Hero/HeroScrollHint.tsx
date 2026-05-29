import React from 'react';
import { motion } from 'framer-motion';

export default function HeroScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center"
    >
      <p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#A89F8C]">
        Scroll
      </p>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="mx-auto h-12 w-px bg-gradient-to-b from-[#D4AF37] to-transparent"
      />
    </motion.div>
  );
}
