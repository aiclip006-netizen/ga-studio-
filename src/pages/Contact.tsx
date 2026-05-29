import React from "react";
import { Link } from "react-router-dom";
import { Copy, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, show a toast here
  };

  return (
    <main className="bg-[#0A0707] min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
           <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-[#D4AF37]">Get in touch</p>
           <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] text-[#F5E9D3] leading-none mb-6">Contact Studio</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-16">
            <div>
              <h3 className="font-accent text-3xl text-[#D4AF37] mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 stroke-1" /> General Inquiries
              </h3>
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 group">
                <a href="mailto:hello@gastudio.in" className="font-sans text-xl text-[#F5E9D3] group-hover:text-[#D4AF37] transition-colors">
                  hello@gastudio.in
                </a>
                <button onClick={() => copyToClipboard('hello@gastudio.in')} className="text-[#A89F8C] hover:text-[#D4AF37] transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-accent text-3xl text-[#D4AF37] mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 stroke-1" /> Phone & WhatsApp
              </h3>
              <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 group">
                <a href="https://wa.me/919876543210" className="font-sans text-xl text-[#F5E9D3] group-hover:text-[#D4AF37] transition-colors">
                  +91-98765-43210
                </a>
                <button onClick={() => copyToClipboard('+919876543210')} className="text-[#A89F8C] hover:text-[#D4AF37] transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <p className="font-sans text-xs text-[#A89F8C] mt-2">Mon–Sun, 10:00 AM – 8:00 PM (IST)</p>
            </div>

            <div>
              <h3 className="font-accent text-3xl text-[#D4AF37] mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 stroke-1" /> Studio
              </h3>
              <div className="border-b border-[#D4AF37]/30 pb-4">
                <p className="font-sans text-xl text-[#F5E9D3] leading-relaxed">
                  123 Luxury Avenue,<br/>
                  Nariman Point, Mumbai,<br/>
                  India 400021
                </p>
                <div className="mt-4 flex gap-4">
                  <a href="#" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-[#D4AF37] hover:text-[#F5E9D3] transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-accent text-3xl text-[#D4AF37] mb-6">Social</h3>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#F5E9D3] hover:bg-[#D4AF37] hover:text-[#0A0707] transition-all">
                  <Instagram className="w-5 h-5 stroke-1" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#F5E9D3] hover:bg-[#D4AF37] hover:text-[#0A0707] transition-all">
                  <Youtube className="w-5 h-5 stroke-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Map / Booking CTA Side */}
          <div className="h-[600px] bg-[#15100E] border border-[#D4AF37]/15 relative flex flex-col items-center justify-center text-center p-8">
            <div className="absolute inset-0 grayscale opacity-20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000!2d72.823!3d18.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzMwLjAiTiA3MsKwNDknMjIuOCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute inset-0 bg-[#0A0707]/60" />
            
            <div className="relative z-10 bg-[#0A0707] p-8 md:p-12 border border-[#D4AF37]/30 shadow-2xl">
              <h3 className="font-display text-4xl text-[#F5E9D3] mb-4">Bookings</h3>
              <p className="font-sans text-[#A89F8C] mb-8 text-sm">
                For wedding inquiries and availability, please use our dedicated consultation form.
              </p>
              <Link to="/book" className="inline-block border border-[#D4AF37] px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0707] transition-all">
                Book Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
