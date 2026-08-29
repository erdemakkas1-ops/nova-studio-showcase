import luma from "@/assets/work-luma.jpg";
import vertex from "@/assets/work-vertex.jpg";
import noir from "@/assets/work-noir.jpg";
import { useGsapContext } from "@/hooks/use-gsap-context";

type Project = {
  index: string;
  name: string;
  subtitle: string;
  year: string;
  disciplines: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    index: "01",
    name: "LUMA",
    subtitle: "Digital Brand Experience",
    year: "2025",
    disciplines: "Art Direction · Web · Motion",
    image: luma,
    alt: "Illuminated sculptural glass object in a dark studio",
  },
  {
    index: "02",
    name: "VERTEX",
    subtitle: "Automotive Platform",
    year: "2025",
    disciplines: "Product Design · Engineering",
    image: vertex,
    alt: "Detail of a dark concept car lit by a single warm streak of light",
  },
  {
    index: "03",
    name: "NOIR",
    subtitle: "Luxury Commerce",
    year: "2024",
    disciplines: "Branding · Commerce · Web",
    image: noir,
    alt: "Matte black luxury packaging resting on dark silk",
  },
];

const projectLayouts = ["md:w-full", "md:ml-auto md:w-[78%]", "md:w-[88%]"];
const mediaLayouts = ["md:aspect-[16/9]", "md:aspect-[4/3]", "md:ml-auto md:aspect-[3/2]"];
const titleLayouts = ["", "md:pl-[22%]", "md:pr-[12%]"];
const articleSpacing = ["", "md:pt-12", "md:pt-28"];

function ProjectBlock({ project, position }: { project: Project; position: number }) {
  return (
    <article data-motion="project" className={`group ${articleSpacing[position]}`}>
      <div
        data-motion="project-copy"
        className={`relative z-10 mb-5 flex items-end justify-between gap-6 md:mb-8 ${titleLayouts[position]}`}
      >
        <div className="flex min-w-0 items-end gap-4 md:gap-8">
          <span className="display shrink-0 pb-1 text-[11vw] leading-none text-primary sm:text-[8vw] md:pb-2 md:text-[4vw]">
            {project.index}
          </span>
          <h3 className="display text-[17vw] leading-[0.82] sm:text-[14vw] md:text-[8.2vw]">
            {project.name}
          </h3>
        </div>
        <span className="hidden pb-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:block">
          {project.year}
        </span>
      </div>

      <div
        data-motion="project-media"
        className={`aspect-[4/5] overflow-hidden sm:aspect-[16/10] ${projectLayouts[position]} ${mediaLayouts[position]}`}
      >
        <div className="h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015] motion-reduce:transition-none">
          <img
            data-motion="project-image"
            src={project.image}
            alt={project.alt}
            width={1600}
            height={1008}
            decoding="async"
            loading="lazy"
            className="h-full w-full scale-[1.015] object-cover will-change-transform"
          />
        </div>
      </div>

      <div
        data-motion="project-meta"
        className={`mt-6 grid grid-cols-[1fr_auto] gap-x-5 gap-y-4 border-t border-border pt-5 md:mt-8 md:grid-cols-2 ${projectLayouts[position]}`}
      >
        <p className="text-lg text-foreground md:text-2xl">{project.subtitle}</p>
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:row-start-2 md:text-left">
          {project.disciplines}
        </p>
        <p className="text-right text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:hidden">
          {project.year}
        </p>
        <span
          aria-hidden="true"
          className="col-span-2 w-fit text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:self-end md:justify-self-end"
        >
          View case study <span className="text-primary">→</span>
        </span>
      </div>
    </article>
  );
}

export function SelectedWork() {
  const scope = useGsapContext((motion, element) => {
    const projects = Array.from(element.querySelectorAll('[data-motion="project"]'));
    const media = Array.from(element.querySelectorAll('[data-motion="project-media"]'));

    motion.imageReveal(media);
    projects.forEach((project) => {
      const copy = project.querySelectorAll(
        '[data-motion="project-copy"], [data-motion="project-meta"]',
      );
      const image = project.querySelector('[data-motion="project-image"]');
      motion.sectionReveal(copy, project);
      if (image) motion.imageDrift(image, project);
    });
  });

  return (
    <section ref={scope} id="work" className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-52">
      <div className="flex items-baseline justify-between border-t border-border pt-5">
        <h2 className="eyebrow">Selected Work</h2>
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Three of many
        </p>
      </div>

      <div className="mt-24 space-y-36 md:mt-40 md:space-y-64">
        {projects.map((project, position) => (
          <ProjectBlock key={project.name} project={project} position={position} />
        ))}
      </div>
    </section>
  );
}

