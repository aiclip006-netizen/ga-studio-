import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/src/lib/assets";

const ALL_PHOTOS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  file: `gallery-${(i % 12) + 1}.jpg`,
  cat: ['Bride', 'Groom', 'Couple', 'Ceremony', 'Candid', 'Decor'][i % 6]
}));

const FILTERS = ['All', 'Bride', 'Groom', 'Couple', 'Ceremony', 'Candid', 'Decor'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredPhotos = activeFilter === 'All' 
    ? ALL_PHOTOS 
    : ALL_PHOTOS.filter(p => p.cat === activeFilter);

  // Keyboard nav
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx, filteredPhotos.length]);

  const next = () => setLightboxIdx(prev => (prev! + 1) % filteredPhotos.length);
  const prev = () => setLightboxIdx(p => (p! - 1 + filteredPhotos.length) % filteredPhotos.length);

  return (
    <main className="bg-[#0A0707] min-h-screen pt-32 pb-24">
      {/* Header & Filters */}
      <div className="max-w-[1440px] mx-auto px-6 mb-16">
        <h1 className="font-display text-[clamp(3rem,6vw,5rem)] text-[#F5E9D3] leading-none mb-12">Gallery</h1>
        
        <div className="flex flex-wrap gap-4">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setLightboxIdx(null); }}
              className={`font-sans text-[0.65rem] tracking-[0.2em] uppercase px-4 py-2 border transition-colors ${
                activeFilter === f 
                ? 'border-[#D4AF37] text-[#D4AF37]' 
                : 'border-[#F5E9D3]/20 text-[#A89F8C] hover:border-[#D4AF37]/50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid (CSS columns) */}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="wait">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: (idx % 15) * 0.05 }}
                className="relative w-full break-inside-avoid bg-[#15100E] group overflow-hidden cursor-pointer"
                onClick={() => setLightboxIdx(idx)}
              >
                {/* Randomly apply 4:5 or 3:4 aspect base on ID for masonry feel */}
                <div className={photo.id % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}>
                  <img 
                    src={asset(photo.file)}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0i ৫০০iIGZpbGw9IiMxNTEwMEUiPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0i ৫০০iLz48L3N2Zz4='; }}
                  />
                  <div className="absolute inset-0 border-[0px] border-[#D4AF37] transition-all duration-300 group-hover:border-[8px]" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#D4AF37] bg-black/50 px-4 py-2">
                       View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#0A0707]/95 backdrop-blur-sm flex items-center justify-center select-none"
          >
            <button 
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 text-[#F5E9D3] hover:text-[#D4AF37] transition-colors p-4 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button onClick={prev} className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 text-[#F5E9D3] hover:text-[#D4AF37] transition-colors z-50">
              <ChevronLeft className="w-12 h-12 stroke-1" />
            </button>

            <button onClick={next} className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 text-[#F5E9D3] hover:text-[#D4AF37] transition-colors z-50">
              <ChevronRight className="w-12 h-12 stroke-1" />
            </button>

            <div className="w-full max-w-5xl h-[80vh] px-16 flex items-center justify-center">
              <motion.img
                key={filteredPhotos[lightboxIdx].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={asset(filteredPhotos[lightboxIdx].file)}
                alt=""
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>
            
            <div className="absolute bottom-6 left-6 font-sans text-xs tracking-[0.2em] text-[#A89F8C]">
              {String(lightboxIdx + 1).padStart(2, '0')} / {String(filteredPhotos.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
