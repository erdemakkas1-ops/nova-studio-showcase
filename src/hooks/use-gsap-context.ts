import { useEffect, useLayoutEffect, useRef, type DependencyList, type RefObject } from "react";

import { gsap, motion, prefersReducedMotion, registerMotionPlugins } from "@/lib/motion";

type MotionSetup = (motionTools: typeof motion, scope: HTMLElement) => void;

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function useGsapContext<T extends HTMLElement>(
  setup: MotionSetup,
  dependencies: DependencyList = [],
): RefObject<T | null> {
  const scope = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    const element = scope.current;
    if (!element) return;

    registerMotionPlugins();
    if (prefersReducedMotion()) return;

    const context = gsap.context(() => setup(motion, element), element);
    return () => context.revert();
  }, dependencies);

  return scope;
}

