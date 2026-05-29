import React from 'react';
import { motion } from 'framer-motion';

export default function HeroFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-8 z-[5] border border-[#D4AF37]/30 md:inset-16"
    />
  );
}
