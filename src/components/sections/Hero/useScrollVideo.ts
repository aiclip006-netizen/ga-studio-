import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollVideoProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  triggerRef: RefObject<HTMLElement | null>;
  scrub?: number;
}

export const useScrollVideo = ({
  videoRef,
  triggerRef,
  scrub = 1.5,
}: UseScrollVideoProps) => {
  useEffect(() => {
    const video = videoRef.current;
    const trigger = triggerRef.current;
    if (!video || !trigger) return;

    // Wait for metadata so we know duration
    const setupScrub = () => {
      const duration = video.duration || 10;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: 'bottom bottom',
          scrub,
          pin: false,
        },
      });

      // Animate currentTime via a proxy object (GSAP can't tween non-numeric props)
      const proxy = { time: 0 };
      tl.to(proxy, {
        time: duration,
        ease: 'none',
        onUpdate: () => {
          if (Math.abs(video.currentTime - proxy.time) > 0.05) {
            video.currentTime = proxy.time;
          }
        },
      });
    };

    if (video.readyState >= 1) setupScrub();
    else video.addEventListener('loadedmetadata', setupScrub, { once: true });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [videoRef, triggerRef, scrub]);
};
