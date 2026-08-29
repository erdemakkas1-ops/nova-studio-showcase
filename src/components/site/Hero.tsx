import heroImage from "@/assets/hero.jpg";
import { useGsapContext } from "@/hooks/use-gsap-context";

export function Hero() {
  const scope = useGsapContext((motion, element) => {
    motion.fadeUp('[data-motion="hero-labels"]', { duration: 0.7, y: 10 });
    motion.textLineReveal('[data-motion="hero-line"]', {
      delay: 0.08,
      duration: 1.05,
      stagger: 0.09,
    });
    motion.fadeUp('[data-motion="hero-support"]', { delay: 0.38, duration: 0.85, y: 14 });

    const image = element.querySelector('[data-motion="hero-image"]');
    if (image) {
      motion.scrollScale(image, element, 1.045, { end: "bottom top", scrub: 1, start: "top top" });
    }
  });

  return (
    <section
      ref={scope}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <img
        data-motion="hero-image"
        src={heroImage}
        alt="Abstract dark sculptural landscape with warm highlights"
        width={1920}
        height={1088}
        decoding="async"
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 h-full w-full scale-[1.12] object-cover object-[68%_center] opacity-75 sm:object-[62%_center] md:object-[58%_center]"
      />
      <div className="absolute inset-0 bg-background/55" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-10 pt-36 md:px-12 md:pb-12 md:pt-44">
        <div
          data-motion="hero-labels"
          className="flex items-start justify-between gap-8 border-t border-border pt-5"
        >
          <p className="eyebrow max-w-[12rem] leading-relaxed">Independent Digital Studio</p>
          <p className="eyebrow text-right leading-relaxed">Istanbul — 2026</p>
        </div>

        <h1 className="display mt-10 text-[13.5vw] leading-[0.82] sm:text-[12.8vw] md:mt-12 md:text-[9.9vw]">
          <span className="block overflow-hidden">
            <span data-motion="hero-line" className="block">
              We create
            </span>
          </span>
          <span className="block overflow-hidden md:pl-[10vw]">
            <span data-motion="hero-line" className="block">
              digital
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-motion="hero-line" className="block">
              experien<span className="text-primary">c</span>es.
            </span>
          </span>
        </h1>

        <div
          data-motion="hero-support"
          className="mt-10 grid gap-8 border-t border-border pt-6 md:mt-12 md:grid-cols-12 md:items-end md:pt-8"
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:text-base">
            Nova Studio designs and builds brand-defining digital work for companies that refuse to
            look like everyone else.
          </p>

          <a
            href="#work"
            className="group inline-flex w-fit items-center gap-4 text-xs uppercase tracking-[0.24em] transition-colors duration-500 hover:text-primary md:col-start-10 md:col-span-3 md:justify-self-end"
          >
            Explore our work
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] items-center gap-3 px-6 pb-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:px-12">
        <span aria-hidden="true" className="scroll-hint">
          ↓
        </span>{" "}
        Scroll
      </div>
    </section>
  );
}

