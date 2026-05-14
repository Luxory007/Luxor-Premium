import { Check, X } from "lucide-react";

const before = ["Falta de conocimiento digital", "Desorganización constante", "Recursos dispersos y obsoletos", "Estancamiento profesional"];
const after = ["Nuevas habilidades rentables", "Recursos listos para usar", "Contenido premium actualizado", "Crecimiento real y medible"];

export function Transformation() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Tu transformación</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
            De estancado a <span className="text-gradient-gold">imparable</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl glass border border-destructive/20 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-destructive/80 mb-6">Antes</div>
            <ul className="space-y-4">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/70">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                    <X className="h-3 w-3" />
                  </span>
                  <span className="line-through opacity-70">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-card glass gold-border p-8 shadow-gold-glow">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Después</div>
            <ul className="space-y-4">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="font-medium">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
