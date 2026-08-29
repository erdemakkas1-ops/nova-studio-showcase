import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SelectedWork } from "@/components/site/SelectedWork";
import { Services } from "@/components/site/Services";
import { Studio } from "@/components/site/Studio";
import { CallToAction } from "@/components/site/CallToAction";
import { Footer } from "@/components/site/Footer";

const title = "NOVA STUDIO — Independent Digital Studio";
const description =
  "NOVA STUDIO is an independent digital studio in Istanbul creating distinctive digital experiences, identities and websites.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-20 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Services />
        <Studio />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

