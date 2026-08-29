import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type MotionTarget = gsap.TweenTarget;

type RevealOptions = {
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
};

type ScrollMotionOptions = {
  end?: string;
  scrub?: number | boolean;
  start?: string;
};

let pluginsRegistered = false;

export function registerMotionPlugins() {
  if (typeof window === "undefined" || pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouchDevice() {
  return ScrollTrigger.isTouch > 0;
}

export const motion = {
  fadeUp(targets: MotionTarget, options: RevealOptions = {}) {
    return gsap.fromTo(
      targets,
      { autoAlpha: 0, y: options.y ?? 20 },
      {
        autoAlpha: 1,
        delay: options.delay ?? 0,
        duration: options.duration ?? 0.9,
        ease: "power3.out",
        stagger: options.stagger ?? 0,
        y: 0,
      },
    );
  },

  textLineReveal(targets: MotionTarget, options: RevealOptions = {}) {
    return gsap.fromTo(
      targets,
      { autoAlpha: 0, yPercent: 105 },
      {
        autoAlpha: 1,
        delay: options.delay ?? 0,
        duration: options.duration ?? 1,
        ease: "power4.out",
        stagger: options.stagger ?? 0.08,
        yPercent: 0,
      },
    );
  },

  staggerReveal(targets: MotionTarget, options: RevealOptions = {}) {
    return motion.fadeUp(targets, { ...options, stagger: options.stagger ?? 0.1 });
  },

  imageReveal(targets: Element[]) {
    return targets.map((target) =>
      gsap.fromTo(
        target,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: {
            once: true,
            start: "top 88%",
            trigger: target,
          },
        },
      ),
    );
  },

  imageDrift(target: MotionTarget, trigger: Element) {
    if (isTouchDevice()) return null;
    return gsap.fromTo(
      target,
      { scale: 1.05, yPercent: -2 },
      {
        ease: "none",
        scale: 1.015,
        scrollTrigger: { end: "bottom top", scrub: 0.8, start: "top bottom", trigger },
        yPercent: 2,
      },
    );
  },

  parallax(target: MotionTarget, trigger: Element, distance = 48) {
    if (isTouchDevice()) return null;
    return gsap.fromTo(
      target,
      { y: -distance },
      {
        ease: "none",
        scrollTrigger: { end: "bottom top", scrub: true, start: "top bottom", trigger },
        y: distance,
      },
    );
  },

  scrollScale(
    target: MotionTarget,
    trigger: Element,
    scale = 1.04,
    options: ScrollMotionOptions = {},
  ) {
    if (isTouchDevice()) return null;
    return gsap.to(target, {
      ease: "none",
      scale,
      scrollTrigger: {
        end: options.end ?? "bottom top",
        scrub: options.scrub ?? true,
        start: options.start ?? "top bottom",
        trigger,
      },
    });
  },

  sectionReveal(target: MotionTarget, trigger: Element, options: RevealOptions = {}) {
    return gsap.fromTo(
      target,
      { autoAlpha: 0, y: options.y ?? 24 },
      {
        autoAlpha: 1,
        delay: options.delay ?? 0,
        duration: options.duration ?? 0.9,
        ease: "power3.out",
        stagger: options.stagger ?? 0,
        scrollTrigger: { once: true, start: "top 88%", trigger },
        y: 0,
      },
    );
  },

  stickySection(section: Element, endTrigger: Element, options: ScrollMotionOptions = {}) {
    if (isTouchDevice()) return null;
    return ScrollTrigger.create({
      end: options.end ?? "bottom bottom",
      endTrigger,
      pin: section,
      pinSpacing: false,
      start: options.start ?? "top top",
    });
  },
};

export { gsap, ScrollTrigger };

