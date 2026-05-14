import { Award, Lock, Layers, Rocket } from "lucide-react";

const stats = [
  { value: "12K+", label: "Estudiantes activos" },
  { value: "189", label: "Productos digitales" },
  { value: "4.9★", label: "Reseñas positivas" },
  { value: "98%", label: "Satisfacción" },
];

const reasons = [
  { icon: Award, title: "Calidad Premium", desc: "Cada producto es revisado por expertos para garantizar excelencia." },
  { icon: Lock, title: "Compra Segura", desc: "Pagos protegidos y entrega instantánea garantizada." },
  { icon: Layers, title: "Contenido Útil", desc: "Recursos prácticos diseñados para resultados reales." },
  { icon: Rocket, title: "Aprendizaje Moderno", desc: "Metodología directa y aplicable al mundo digital actual." },
];

export function WhyLuxor() {
  return (
    <section id="porque" className="py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">¿Por qué Luxor Store?</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
            La tienda premium en la que <span className="text-gradient-gold">miles confían</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass gold-border text-center p-6">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-gold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-gradient-card glass p-6 hover:border-primary/40 transition-colors">
              <r.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-display font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
