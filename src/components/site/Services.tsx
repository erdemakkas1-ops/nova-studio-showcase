import { useGsapContext } from "@/hooks/use-gsap-context";

const services = [
  { name: "Web Design", detail: "Interface, art direction, design systems" },
  { name: "Web Development", detail: "Front-end engineering, performance, CMS" },
  { name: "Digital Experiences", detail: "Motion, interaction, immersive builds" },
  { name: "Branding", detail: "Identity, naming, visual language" },
  { name: "Creative Direction", detail: "Strategy, concept, long-term partnership" },
];

export function Services() {
  const scope = useGsapContext((motion, element) => {
    const heading = element.querySelector('[data-motion="services-heading"]');
    const rows = element.querySelectorAll('[data-motion="service-row"]');
    const numbers = element.querySelectorAll('[data-motion="service-number"]');
    if (heading) motion.sectionReveal(heading, element, { duration: 0.8, y: 16 });
    motion.sectionReveal(rows, element, { delay: 0.12, duration: 0.85, stagger: 0.08, y: 18 });
    motion.parallax(numbers, element, 8);
  });

  return (
    <section ref={scope} id="services" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-44">
        <div
          data-motion="services-heading"
          className="grid gap-8 border-t border-border pt-5 md:grid-cols-12"
        >
          <h2 className="eyebrow md:col-span-3">Services</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:text-base">
            A focused practice. Five disciplines, applied end to end on every engagement.
          </p>
        </div>

        <ol className="mt-20 border-t border-border md:mt-28">
          {services.map((service, index) => (
            <li
              key={service.name}
              data-motion="service-row"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 border-b border-border py-7 transition-colors duration-500 hover:border-primary sm:gap-x-6 md:grid-cols-12 md:py-10"
            >
              <span
                data-motion="service-number"
                className="display text-2xl leading-none text-primary sm:text-3xl md:col-span-1 md:text-4xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 md:col-span-7 md:col-start-3">
                <h3 className="display text-[9.5vw] leading-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 sm:text-[8vw] md:text-[4.6vw] md:group-hover:translate-x-3">
                  {service.name}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="text-xl text-muted-foreground transition-all duration-500 group-hover:translate-x-1 group-hover:text-primary md:col-start-12 md:justify-self-end md:text-2xl"
              >
                →
              </span>
              <p className="col-start-2 text-[10px] uppercase leading-relaxed tracking-[0.24em] text-muted-foreground md:col-span-3 md:col-start-9 md:row-start-1 md:text-right">
                {service.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

