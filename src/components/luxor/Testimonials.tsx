import { Star } from "lucide-react";

const testimonials = [
  { name: "Camila Rodríguez", role: "Emprendedora Digital", initials: "CR", text: "Los recursos de Luxor cambiaron mi negocio. La calidad y el detalle son simplemente premium." },
  { name: "Andrés Martínez", role: "Freelancer", initials: "AM", text: "Por fin un catálogo donde sé que cada compra vale la pena. Acceso inmediato y contenido top." },
  { name: "Valentina López", role: "Creadora de Contenido", initials: "VL", text: "Diseño impecable, información actualizada y resultados reales. 10/10 recomendado." },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Testimonios</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
            Lo que dicen nuestros <span className="text-gradient-gold">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-gradient-card glass p-7 hover:shadow-gold-glow transition-all">
              <div className="flex gap-1 text-primary mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-gold flex items-center justify-center font-display font-bold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
