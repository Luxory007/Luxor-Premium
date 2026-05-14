import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/luxor/Navbar";
import { Hero } from "@/components/luxor/Hero";
import { Benefits } from "@/components/luxor/Benefits";
import { Catalog } from "@/components/luxor/Catalog";
import { WhyLuxor } from "@/components/luxor/WhyLuxor";
import { Testimonials } from "@/components/luxor/Testimonials";
import { Transformation } from "@/components/luxor/Transformation";
import { CTA } from "@/components/luxor/CTA";
import { FAQ } from "@/components/luxor/FAQ";
import { Footer } from "@/components/luxor/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxor Store Premium — Infoproductos Digitales para Crecer Online" },
      {
        name: "description",
        content:
          "Ebooks, cursos y recursos digitales premium para aprender, emprender y monetizar online. Acceso inmediato, calidad de élite y resultados que perduran.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Catalog />
      <WhyLuxor />
      <Testimonials />
      <Transformation />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
