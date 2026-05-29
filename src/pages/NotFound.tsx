import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-[#0A0707] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grain/texture effect */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#D4AF37] font-display text-[clamp(6rem,15vw,12rem)] leading-none mb-2">404</div>
          <h1 className="font-display text-3xl md:text-5xl text-[#F5E9D3] mb-6">Lost in the Edit</h1>
          <p className="font-sans text-[#A89F8C] max-w-md mx-auto mb-12">
            The frame you are looking for seems to have been left on the cutting room floor. Let's get you back to the reel.
          </p>
          <Link to="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
