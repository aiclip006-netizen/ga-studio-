import React from 'react';

export default function HeroOverlays() {
  return (
    <>
      {/* Z-1: Top + bottom dark gradient for text legibility */}
      <div className="pointer-events-none absolute inset-0 z-[1]
        bg-gradient-to-b from-[#0A0707]/70 via-transparent to-[#0A0707]/85" />

      {/* Z-2: Maroon color tint */}
      <div className="pointer-events-none absolute inset-0 z-[2]
        bg-[#6B0F1A] mix-blend-multiply opacity-[0.18]" />

      {/* Z-3: Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(10,7,7,0.7) 100%)',
        }} />
    </>
  );
}
