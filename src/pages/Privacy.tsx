import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "When you use our services or inquire through our website, we may collect personal information including but not limited to your name, email address, phone number, wedding date, venue details, and budget. This information is gathered solely to provide our services and communicate effectively regarding your event."
    },
    {
      title: "2. How We Use Your Information",
      content: "Your information is used to schedule consultations, send critical updates about your project, process payments, and deliver final creative assets. We do not sell or rent your personal information to third parties."
    },
    {
      title: "3. Media Release & Portfolio Use",
      content: "As a creative studio, our portfolio is our primary means of demonstrating our craft. By booking GA Studio, you agree that we may use selected photographs and film clips from your event for promotional purposes on our website, social media channels, and professional awards submissions, unless a specific Non-Disclosure Agreement (NDA) is signed prior to the event."
    },
    {
      title: "4. Data Storage & Security",
      content: "We implement robust security measures to preserve the safety of your personal information and event media. Final assets are delivered via secure, private links. We retain original raw footage and photographs for a period of one (1) year following your event date, after which we cannot guarantee their availability."
    },
    {
      title: "5. Cookies & Analytics",
      content: "Our website uses standard analytics tools to understand how visitors interact with our site. This data is anonymized and helps us improve our digital experience."
    }
  ];

  return (
    <main className="bg-[#0A0707] min-h-screen pt-40 pb-32">
      <div className="max-w-[800px] mx-auto px-6">
        
        <div className="mb-16 border-b border-[#D4AF37]/30 pb-12">
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-[#D4AF37]">Legal</p>
          <h1 className="font-display text-[clamp(2.5rem,4vw,4rem)] text-[#F5E9D3] leading-none mb-6">Privacy Policy</h1>
          <p className="font-sans text-[#A89F8C] uppercase tracking-widest text-xs">Last Updated: May 2026</p>
        </div>

        <div className="space-y-12">
          {sections.map((sec, i) => (
            <div key={i}>
              <h2 className="font-accent text-2xl text-[#D4AF37] mb-4">{sec.title}</h2>
              <p className="font-sans text-[#F5E9D3] leading-relaxed opacity-80">{sec.content}</p>
            </div>
          ))}

          <div className="pt-12 mt-12 border-t border-[#D4AF37]/15">
            <h2 className="font-accent text-2xl text-[#D4AF37] mb-4">Contact Us</h2>
            <p className="font-sans text-[#F5E9D3] leading-relaxed opacity-80 mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a href="mailto:legal@gastudio.in" className="font-sans text-[#D4AF37] hover:text-[#F5E9D3] transition-colors">legal@gastudio.in</a>
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <Link to="/" className="inline-block border-b border-[#D4AF37]/30 pb-1 font-sans text-xs uppercase tracking-[0.2em] text-[#A89F8C] hover:text-[#D4AF37] transition-colors">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
