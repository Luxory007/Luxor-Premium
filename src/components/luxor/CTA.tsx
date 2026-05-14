import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-card glass gold-border p-10 sm:p-16 text-center shadow-luxe">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/40 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 shimmer pointer-events-none opacity-50" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass gold-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Acceso Limitado
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Empieza Hoy Tu <br />
              <span className="text-gradient-gold">Crecimiento Digital</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Únete a miles que ya están aprendiendo, creando y monetizando con los recursos premium de Luxor Store.
            </p>
            <a href="#catalogo" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-9 py-5 text-base font-semibold text-primary-foreground shadow-gold pulse-glow hover:scale-105 transition-transform">
              Acceder al Catálogo Premium
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-5 text-xs text-muted-foreground uppercase tracking-wider">
              Compra segura · Acceso inmediato · Soporte dedicado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
