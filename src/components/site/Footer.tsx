import { useGsapContext } from "@/hooks/use-gsap-context";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Email", href: "mailto:hello@novastudio.com" },
];

export function Footer() {
  const scope = useGsapContext((motion, element) => {
    const content = element.querySelector('[data-motion="footer-content"]');
    if (content) motion.sectionReveal(content, element, { duration: 0.8, y: 12 });
  });

  return (
    <footer ref={scope} className="border-t border-border">
      <div
        data-motion="footer-content"
        className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12"
      >
        <p className="display text-sm tracking-[0.3em]">Nova Studio</p>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.22em] md:gap-10">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="link-wipe text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Istanbul — 2026
        </p>
      </div>
    </footer>
  );
}

