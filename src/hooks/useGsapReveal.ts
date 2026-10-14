import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = (options?: {
  y?: number;
  duration?: number;
  stagger?: number;
  triggerHook?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll('.gsap-reveal');
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: options?.y ?? 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 0.8,
            stagger: options?.stagger ?? 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: options?.triggerHook ?? 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert(); // clean up GSAP on unmount
  }, [options]);

  return containerRef;
};
