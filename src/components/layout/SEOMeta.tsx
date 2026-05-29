import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { asset } from "@/src/lib/assets";

const routeMeta = {
  "/": { title: "GA Studio — Luxury Wedding Films & Photography", desc: "Cinematic wedding films and editorial photography for couples who want their story told beautifully." },
  "/about": { title: "About — The Storytellers Behind GA Studio", desc: "Meet the team crafting timeless wedding films. 8 years, 250+ weddings, 14 cities." },
  "/services": { title: "Services — Wedding Films, Pre-Wedding & More", desc: "From cinematic wedding films to intimate engagement shoots. Explore our signature packages." },
  "/films": { title: "Wedding Films — GA Studio Portfolio", desc: "A curated collection of real wedding films told with emotion, craft, and cinema." },
  "/gallery": { title: "Photo Gallery — Editorial Wedding Photography", desc: "Browse our latest editorial wedding photography work across Indian celebrations." },
  "/book": { title: "Book a Consultation — GA Studio", desc: "Reserve your wedding date. We take only 24 weddings per year." },
  "/contact": { title: "Contact GA Studio", desc: "Visit our studio, message us on WhatsApp, or send a quick enquiry." },
  "/privacy": { title: "Privacy Policy — GA Studio", desc: "How we collect, use, and protect your personal data." },
};

export default function SEOMeta() {
  const { pathname } = useLocation();
  const meta = routeMeta[pathname as keyof typeof routeMeta] || { title: "GA Studio", desc: "Where every frame becomes a forever." };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.desc} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://gastudio.in${pathname}`} />
      <meta property="og:image" content={asset('og-image.jpg')} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
