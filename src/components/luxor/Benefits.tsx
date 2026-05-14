import { Zap, Crown, GraduationCap, RefreshCw, Clock, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const items = [
  { icon: Zap, title: "Acceso Inmediato", desc: "Recibe tus productos al instante tras la compra." },
  { icon: Crown, title: "Contenido Premium", desc: "Material de élite curado por expertos del sector." },
  { icon: GraduationCap, title: "Aprendizaje Práctico", desc: "Aplica lo aprendido desde el primer día." },
  { icon: RefreshCw, title: "Recursos Actualizados", desc: "Contenidos al día con las últimas tendencias." },
  { icon: Clock, title: "Disponible 24/7", desc: "Aprende a tu ritmo, cuando y donde quieras." },
  { icon: Smartphone, title: "Móvil & Tablet", desc: "100% compatible con todos tus dispositivos." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Por qué elegirnos</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
            Una experiencia <span className="text-gradient-gold">verdaderamente premium</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-2xl bg-gradient-card glass p-7 hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 gold-border text-primary mb-5">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
