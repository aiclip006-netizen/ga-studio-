import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, ArrowRight } from "lucide-react";

export default function GlobalFooter() {
  return (
    <footer className="bg-[#0A0707] border-t border-[#D4AF37]/15 pt-24 pb-8 relative overflow-hidden text-[#F5E9D3]">
      {/* Background Decorative Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-light text-white opacity-5 tracking-tighter select-none pointer-events-none whitespace-nowrap">
        GA
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Col 1 - Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-baseline gap-1 mb-6">
              <span className="font-display text-4xl tracking-widest text-[#F5E9D3]">
                GA
              </span>
              <span className="font-sans text-[0.6rem] tracking-[0.3em] text-[#F5E9D3]/70 uppercase">
                Studio
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] ml-1" />
            </Link>
            <p className="font-accent text-xl text-[#D4AF37] mb-4">
              Where Every Frame Becomes a Forever.
            </p>
            <p className="font-sans text-sm text-[#A89F8C] max-w-[280px] leading-relaxed">
              Luxury Indian Wedding Photography & Videography. Cinematic storytelling for the most important day of your life.
            </p>
          </div>

          {/* Col 2 - Explore */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#F5E9D3]/50 mb-8 border-b border-[#D4AF37]/15 pb-4">
              Explore
            </h4>
            <ul className="space-y-4 font-sans text-sm tracking-wide text-[#A89F8C]">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors inline-block">About</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors inline-block">Services</Link></li>
              <li><Link to="/films" className="hover:text-[#D4AF37] transition-colors inline-block">Films</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors inline-block">Gallery</Link></li>
              <li><Link to="/book" className="text-[#D4AF37] hover:text-[#E8C766] transition-colors inline-block mt-2">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Col 3 - Connect */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#F5E9D3]/50 mb-8 border-b border-[#D4AF37]/15 pb-4">
              Connect
            </h4>
            <ul className="space-y-4 font-sans text-sm tracking-wide text-[#A89F8C]">
              <li><a href="tel:+919876543210" className="hover:text-[#D4AF37] transition-colors inline-block">+91 98765 43210</a></li>
              <li><a href="mailto:hello@gastudio.in" className="hover:text-[#D4AF37] transition-colors inline-block">hello@gastudio.in</a></li>
              <li><a href="https://wa.me/919876543210" className="hover:text-[#D4AF37] transition-colors inline-block">WhatsApp Us</a></li>
              <li className="pt-2">GA Studio<br/>Mumbai, India</li>
            </ul>
          </div>

          {/* Col 4 - Follow & Newsletter */}
          <div>
            <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#F5E9D3]/50 mb-8 border-b border-[#D4AF37]/15 pb-4">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-10">
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-[#D4AF37]/30 rounded-none flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0707] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 border border-[#D4AF37]/30 rounded-none flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0707] transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-[#D4AF37]/30 rounded-none flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0707] transition-all">
                <Facebook size={18} />
              </a>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="Join our newsletter" 
                className="w-full bg-transparent border-b border-[#D4AF37]/30 py-3 text-sm text-white placeholder:text-[#A89F8C]/50 focus:outline-none focus:border-[#D4AF37] transition-colors rounded-none"
              />
              <button aria-label="Subscribe" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#D4AF37] hover:text-[#F5E9D3] transition-colors p-2">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] tracking-[0.1em] uppercase text-[#A89F8C]/60 border-t border-[#D4AF37]/15 pt-8">
          <p>© {new Date().getFullYear()} GA Studio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <span>Crafted with care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
