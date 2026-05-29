import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { asset } from '@/src/lib/assets';
import { cn } from '@/src/lib/utils';

const reviews = [
  { id: 1, name: 'Priya & Rahul', loc: 'Udaipur', text: 'GA Studio didn\'t just capture our wedding; they bottled the feeling of it. Watching our film brings tears to our eyes every single time.', img: 'client-1.jpg' },
  { id: 2, name: 'Ananya & Vikram', loc: 'Lake Como', text: 'Professional, invisible, and incredibly talented. They delivered a piece of art that our family will treasure for generations.', img: 'client-2.jpg' },
  { id: 3, name: 'Sneha & Aman', loc: 'Goa', text: 'The attention to detail is unmatched. Every frame looks like it belongs in a cinema. We couldn\'t have asked for a better team.', img: 'client-3.jpg' },
];

export default function ClientLove() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCurrent((p) => (p + 1) % reviews.length);
  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-32 bg-[#15100E] border-y border-[#D4AF37]/15">
      <div className="max-w-[1440px] mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 bg-[#0A0707] px-4 py-2 border border-[#D4AF37]/30 mb-8 rounded-full">
           <span className="text-[#D4AF37] font-semibold text-sm">4.9</span>
           <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
           <span className="text-[#A89F8C] text-xs uppercase tracking-widest pl-2 border-l border-[#D4AF37]/30">Google Reviews</span>
        </div>
        <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-[#F5E9D3] leading-none mb-4">Loved by 200+ Couples</h2>
      </div>

      <div 
        className="max-w-4xl mx-auto px-6 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[300px] md:h-[250px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
               <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />)}
               </div>
               <p className="font-accent text-xl md:text-3xl text-[#F5E9D3] leading-relaxed mb-8 max-w-3xl px-4">
                 "{reviews[current].text}"
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/30">
                   <img 
                      src={asset(reviews[current].img)} 
                      alt="" 
                      className="w-full h-full object-cover grayscale"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzFGMgxNTEiPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIvPjwvc3ZnPg=='; }}
                    />
                 </div>
                 <div className="text-left">
                   <p className="font-sans text-sm text-[#F5E9D3] tracking-wide">{reviews[current].name}</p>
                   <p className="font-sans text-[0.65rem] text-[#A89F8C] tracking-widest uppercase">{reviews[current].loc}</p>
                 </div>
               </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex justify-center items-center gap-8">
          <button onClick={prev} className="p-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={cn("w-1.5 h-1.5 rounded-full transition-all duration-300", i === current ? "bg-[#D4AF37] w-6" : "bg-[#D4AF37]/30")}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-full transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
