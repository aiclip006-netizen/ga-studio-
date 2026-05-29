import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '@/src/lib/assets';
import { motion } from 'framer-motion';

const topRow = Array.from({ length: 6 }, (_, i) => `gallery-${i + 1}.jpg`);
const bottomRow = Array.from({ length: 6 }, (_, i) => `gallery-${i + 7}.jpg`);

const MarqueeRow = ({ images, direction = "left" }: { images: string[], direction?: "left" | "right" }) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap mb-6 group">
      <motion.div 
        className="flex gap-6 pr-6 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: direction === "left" ? 40 : 50, repeat: Infinity, ease: "linear" }}
        style={{ width: 'max-content' }}
        whileHover={{ animationPlayState: 'paused' }} // A bit tricky with framer-motion, we might just use CSS animation if this doesn't work perfectly
      >
        {/* Render twice for infinite loop */}
        {[...images, ...images].map((img, i) => (
          <div key={i} className="w-[300px] h-[200px] md:w-[400px] md:h-[280px] shrink-0 overflow-hidden relative">
            <img 
              src={asset(img)} 
              alt="Gallery Teaser" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMjgwIiBmaWxsPSIjMTUxMDBFIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIvPjwvc3ZnPg=='; }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function GalleryTeaser() {
  return (
    <section className="py-24 bg-[#0A0707] overflow-hidden min-h-screen flex flex-col justify-center">
      <MarqueeRow images={topRow} direction="left" />
      <MarqueeRow images={bottomRow} direction="right" />
      
      <div className="text-center mt-12">
        <Link to="/gallery" className="inline-flex items-center text-[0.65rem] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#F5E9D3] transition-colors gap-3 group">
          Browse Full Gallery 
          <motion.span 
            className="w-8 h-[1px] bg-[#D4AF37] block group-hover:bg-[#F5E9D3] transition-colors"
            initial={{ scaleX: 0.5 }}
            whileHover={{ scaleX: 1, originX: 0 }}
          />
        </Link>
      </div>
    </section>
  );
}
