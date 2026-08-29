import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-[1600px] flex-col items-start gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:py-6 md:px-12"
      >
        <a href="#top" className="display text-sm tracking-[0.3em] md:text-base">
          Nova<span className="text-primary">&nbsp;</span>Studio
        </a>
        <ul className="flex w-full items-center justify-between gap-0 text-[10px] uppercase tracking-[0.16em] sm:w-auto sm:justify-start sm:gap-6 sm:text-xs sm:tracking-[0.22em] md:gap-12">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="link-wipe inline-block py-2 text-muted-foreground transition-colors duration-300 hover:text-foreground sm:py-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

