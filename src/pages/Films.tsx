import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { asset } from "@/src/lib/assets";

const ALL_FILMS = [
  { id: 1, title: 'Aman & Priya', loc: 'Lake Como, Italy', type: 'Hindu', file: 'film-1.mp4', aspect: 'aspect-video' },
  { id: 2, title: 'Vikram & Sneha', loc: 'Udaipur', type: 'Destination', file: 'film-2.mp4', aspect: 'aspect-[4/5]' },
  { id: 3, title: 'Rahul & Ananya', loc: 'Bali', type: 'Destination', file: 'film-3.mp4', aspect: 'aspect-video' },
  { id: 4, title: 'Samir & Zara', loc: 'Dubai', type: 'Muslim', file: 'film-1.mp4', aspect: 'aspect-video' },
  { id: 5, title: 'Karan & Neha', loc: 'Amritsar', type: 'Sikh', file: 'film-2.mp4', aspect: 'aspect-[4/5]' },
  { id: 6, title: 'David & Sarah', loc: 'Goa', type: 'Christian', file: 'film-3.mp4', aspect: 'aspect-video' },
  { id: 7, title: 'Arjun & Maya', loc: 'Jaipur', type: 'Pre-Wedding', file: 'film-1.mp4', aspect: 'aspect-[4/5]' },
];

const FILTERS = ['All', 'Hindu', 'Sikh', 'Christian', 'Muslim', 'Destination', 'Pre-Wedding'];

export default function Films() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedFilm, setSelectedFilm] = useState<typeof ALL_FILMS[0] | null>(null);

  const filteredFilms = activeFilter === 'All' 
    ? ALL_FILMS 
    : ALL_FILMS.filter(f => f.type === activeFilter);

  return (
    <main className="bg-[#0A0707] min-h-screen pt-32 pb-24">
      {/* Header & Filters */}
      <div className="max-w-[1440px] mx-auto px-6 mb-16">
        <h1 className="font-display text-[clamp(3rem,6vw,5rem)] text-[#F5E9D3] leading-none mb-12">Films</h1>
        
        <div className="flex flex-wrap gap-4">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
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
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          <AnimatePresence>
            {filteredFilms.map((film) => (
              <motion.div
                key={film.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative w-full break-inside-avoid bg-[#15100E] group overflow-hidden cursor-pointer ${film.aspect}`}
                onClick={() => setSelectedFilm(film)}
              >
                <video 
                  src={asset(film.file)}
                  muted loop playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                  onMouseLeave={(e) => {
                    const v = e.target as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[0.65rem] tracking-[0.2em] text-[#D4AF37] uppercase mb-1">{film.loc}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-[#F5E9D3] mb-4">{film.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F5E9D3] opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                     <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center">
                       <Play className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                     </div>
                     Watch Film
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-[#0A0707]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedFilm(null)}
              className="absolute top-6 right-6 text-[#F5E9D3] hover:text-[#D4AF37] transition-colors p-4 z-50"
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              layoutId={`film-${selectedFilm.id}`}
              className="w-full max-w-6xl aspect-video bg-black shadow-2xl relative"
            >
               <video 
                  src={asset(selectedFilm.file)}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
               />
            </motion.div>
            
            <div className="mt-8 text-center max-w-2xl">
              <h2 className="font-display text-4xl text-[#F5E9D3] mb-2">{selectedFilm.title}</h2>
              <p className="font-sans text-sm tracking-[0.2em] text-[#D4AF37] uppercase">{selectedFilm.loc} — {selectedFilm.type}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
