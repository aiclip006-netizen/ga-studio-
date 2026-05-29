import React, { useRef } from 'react';
import { asset } from '@/src/lib/assets';
import { useScrollVideo } from './useScrollVideo';
import HeroOverlays from './HeroOverlays';
import HeroActs from './HeroActs';
import HeroFrame from './HeroFrame';
import HeroScrollHint from './HeroScrollHint';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useScrollVideo({ videoRef, triggerRef: sectionRef, scrub: 1.5 });

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Z-0: Video */}
        <video
          ref={videoRef}
          src={asset('Couple_exchanging_rings_ceremony_202605281513.mp4')}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          style={{ willChange: 'transform' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Z-1 to Z-3: Overlays */}
        <HeroOverlays />
        {/* Z-5: Decorative frame */}
        <HeroFrame />
        {/* Z-10: Text acts */}
        <HeroActs />
        {/* Bottom hint */}
        <HeroScrollHint />
      </div>
    </section>
  );
}
