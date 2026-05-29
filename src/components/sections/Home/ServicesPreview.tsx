import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { asset } from '@/src/lib/assets';

const services = [
  { id: 1, title: 'The Wedding Film', desc: 'Cinematic storytelling for your grand day.', img: 'gallery-1.jpg' },
  { id: 2, title: 'Pre-Wedding', desc: 'Editorial shoots capturing your connection.', img: 'gallery-2.jpg' },
  { id: 3, title: 'Engagement', desc: 'Intimate coverage of the beginning.', img: 'gallery-3.jpg' },
  { id: 4, title: 'Reception', desc: 'Full evening coverage with same-day edits.', img: 'gallery-4.jpg' },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-[#0A0707] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
           <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-[#D4AF37]">Expertise</p>
           <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-[#F5E9D3] leading-none">Crafted for Every<br/>Chapter</h2>
        </div>
        <Link to="/services" className="text-[#A89F8C] hover:text-[#D4AF37] transition-colors font-sans text-xs tracking-[0.2em] uppercase border-b border-[#D4AF37]/30 pb-1">
          Explore All Services
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Horizontal scroll on mobile via CSS overflow, grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 md:pb-0 md:grid md:grid-cols-4 md:gap-6 hide-scrollbar">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="min-w-[300px] sm:min-w-[320px] md:min-w-0 h-[480px] bg-[#15100E] border border-[#D4AF37]/15 relative group overflow-hidden snap-center flex flex-col justify-end p-8 transition-transform duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={asset(service.img)} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0707] via-[#0A0707]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-3xl text-[#F5E9D3] mb-3">{service.title}</h3>
                <p className="font-sans text-sm text-[#A89F8C] mb-8">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-[0.65rem] tracking-[0.2em] uppercase text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore <span className="ml-2">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
