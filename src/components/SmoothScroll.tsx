import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { gsap, prefersReducedMotion, registerMotionPlugins, ScrollTrigger } from "@/lib/motion";

export function SmoothScroll() {
  useEffect(() => {
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let refreshFrame: number | undefined;

    const update = (time: number) => lenis?.raf(time * 1000);

    const stop = () => {
      if (refreshFrame !== undefined) {
        window.cancelAnimationFrame(refreshFrame);
        refreshFrame = undefined;
      }
      if (!lenis) return;
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
      lenis.destroy();
      lenis = undefined;
      gsap.ticker.lagSmoothing(500, 33);
    };

    const start = () => {
      stop();
      if (prefersReducedMotion() || coarsePointer.matches || navigator.maxTouchPoints > 0) return;

      registerMotionPlugins();
      lenis = new Lenis({
        anchors: true,
        autoRaf: false,
        duration: 0.9,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      });

      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    start();
    coarsePointer.addEventListener("change", start);
    reducedMotion.addEventListener("change", start);

    return () => {
      coarsePointer.removeEventListener("change", start);
      reducedMotion.removeEventListener("change", start);
      stop();
    };
  }, []);

  return null;
}

