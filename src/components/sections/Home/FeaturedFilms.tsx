import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { asset } from '@/src/lib/assets';

const films = [
  { id: 1, file: 'film-1.mp4', title: 'Aman & Priya', loc: 'Lake Como, Italy' },
  { id: 2, file: 'film-2.mp4', title: 'Vikram & Sneha', loc: 'Udaipur, India' },
  { id: 3, file: 'film-3.mp4', title: 'Rahul & Ananya', loc: 'Bali, Indonesia' },
];

export default function FeaturedFilms() {
  return (
    <section className="py-24 bg-[#0A0707]">
      <div className="max-w-[1440px] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-[#F5E9D3] leading-none">Featured Films</h2>
        </div>
        <Link to="/films" className="text-[#A89F8C] hover:text-[#D4AF37] transition-colors font-sans text-[0.65rem] tracking-[0.2em] uppercase border-b border-[#D4AF37]/30 pb-1">
          View All Films
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {films.map((film, i) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video bg-[#15100E] group overflow-hidden cursor-pointer"
            >
              <video 
                src={asset(film.file)}
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                onMouseLeave={(e) => {
                  const v = e.target as HTMLVideoElement;
                  v.pause();
                  v.currentTime = 0;
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full bg-gradient-to-t from-black/80 to-transparent bottom-0">
                <p className="text-[0.65rem] tracking-[0.2em] text-[#D4AF37] uppercase mb-1">{film.loc}</p>
                <h3 className="font-display text-2xl text-[#F5E9D3]">{film.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
