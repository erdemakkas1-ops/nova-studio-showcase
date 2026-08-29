import { useGsapContext } from "@/hooks/use-gsap-context";

const stats = [
  { value: "10", label: "Years practising" },
  { value: "8", label: "People in the studio" },
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Awards & mentions" },
];

export function Studio() {
  const scope = useGsapContext((motion, element) => {
    const heading = element.querySelector('[data-motion="studio-heading"]');
    const body = element.querySelectorAll('[data-motion="studio-body"]');
    if (heading) motion.sectionReveal(heading, element, { duration: 1, y: 22 });
    motion.sectionReveal(body, element, { delay: 0.12, duration: 0.9, stagger: 0.1, y: 16 });
  });

  return (
    <section ref={scope} id="studio" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-48">
        <div data-motion="studio-heading" className="grid md:grid-cols-12">
          <p className="eyebrow md:col-span-2">Studio</p>

          <h2 className="display mt-12 text-[15vw] leading-[0.84] sm:text-[13vw] md:col-span-10 md:col-start-3 md:mt-0 md:text-right md:text-[8.5vw]">
            Small team.
            <br />
            Big ideas.
          </h2>
        </div>

        <div
          data-motion="studio-body"
          className="mt-20 grid gap-10 border-t border-border pt-8 md:mt-28 md:grid-cols-12 md:gap-8"
        >
          <p className="text-lg leading-relaxed text-foreground md:col-span-5 md:col-start-2 md:text-2xl md:leading-relaxed">
            Nova Studio is an independent creative practice working at the intersection of design,
            technology and craft. We keep the team deliberately small so the people who pitch the
            idea are the people who build it.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-8 md:pt-24 md:text-base">
            We partner with a handful of clients each year — brands, cultural institutions and
            ambitious founders — and treat every project as a single, considered object rather than
            a set of deliverables. No templates, no filler, no committee design.
          </p>
        </div>

        <dl
          data-motion="studio-body"
          className="mt-20 grid grid-cols-2 border-t border-border md:mt-32 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-b border-border py-8 md:border-b-0 md:py-10 ${index % 2 === 0 ? "pr-5" : "border-l border-border pl-5 md:border-l-0 md:pl-0"}`}
            >
              <dt className="display text-5xl md:text-6xl">{stat.value}</dt>
              <dd className="mt-4 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

