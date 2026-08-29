import { useGsapContext } from "@/hooks/use-gsap-context";

export function CallToAction() {
  const scope = useGsapContext((motion, element) => {
    const heading = element.querySelector('[data-motion="cta-heading"]');
    const details = element.querySelectorAll('[data-motion="cta-detail"]');
    if (heading) motion.sectionReveal(heading, element, { duration: 1, y: 24 });
    motion.sectionReveal(details, element, { delay: 0.14, duration: 0.85, stagger: 0.1, y: 14 });
  });

  return (
    <section ref={scope} id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-36 md:px-12 md:py-60">
        <div className="flex items-baseline justify-between border-t border-border pt-5">
          <p className="eyebrow">Start a project</p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Select projects only
          </p>
        </div>

        <h2
          data-motion="cta-heading"
          className="display mt-20 text-[14vw] leading-[0.84] sm:text-[12vw] md:mt-28 md:text-[9.2vw]"
        >
          Let&apos;s create
          <span className="block text-right">something great.</span>
        </h2>

        <div className="mt-16 grid gap-12 border-t border-border pt-8 md:mt-24 md:grid-cols-12 md:items-end">
          <p
            data-motion="cta-detail"
            className="max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-4 md:text-base"
          >
            We take on a limited number of projects each quarter. Tell us what you&apos;re building
            and we&apos;ll tell you honestly whether we&apos;re the right studio.
          </p>

          <a
            data-motion="cta-detail"
            href="mailto:hello@novastudio.com"
            className="link-wipe group inline-flex w-fit items-center gap-4 text-lg text-foreground transition-colors duration-500 hover:text-primary md:col-span-5 md:col-start-8 md:justify-self-end md:text-2xl"
          >
            hello@novastudio.com
            <span
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

