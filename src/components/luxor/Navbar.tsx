import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#porque", label: "¿Por qué?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass shadow-luxe" : ""}`}>
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Luxor Store" className="h-10 w-10 rounded-full ring-1 ring-primary/40" />
            <div className="leading-tight">
              <div className="font-display font-extrabold tracking-tight text-foreground text-base sm:text-lg">
                Luxor <span className="text-gradient-gold">Store</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Premium Ebooks</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#catalogo" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
            Acceder Ahora
          </a>

          <button aria-label="Abrir menú" onClick={() => setOpen((v) => !v)} className="lg:hidden text-foreground">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary py-2">
                {l.label}
              </a>
            ))}
            <a href="#catalogo" onClick={() => setOpen(false)} className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground text-center">
              Acceder Ahora
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
