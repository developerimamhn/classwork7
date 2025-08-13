"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Smoothness (higher = slower)
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing
      // smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup
    };
  }, []);

  return <>{children}</>;
}
