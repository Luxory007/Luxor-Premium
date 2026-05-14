import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const products = [
  { img: p1, title: "Marketing Digital Pro", category: "Ebook", badge: "Top Ventas", price: "$29" },
  { img: p2, title: "Inteligencia Artificial", category: "Curso", badge: "Nuevo", price: "$49" },
  { img: p3, title: "Copywriting Pro", category: "Ebook", badge: "Premium", price: "$24" },
  { img: p4, title: "Pack Plantillas Élite", category: "Recurso", badge: "Top Ventas", price: "$19" },
];

const badgeStyle: Record<string, string> = {
  "Top Ventas": "bg-gradient-gold text-primary-foreground",
  "Nuevo": "bg-foreground/90 text-background",
  "Premium": "glass gold-border text-primary",
};

export function Catalog() {
  return (
    <section id="catalogo" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Catálogo destacado</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
              Productos <span className="text-gradient-gold">premium</span> listos para usar
            </h2>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
            Ver catálogo completo <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group relative rounded-2xl bg-gradient-card glass overflow-hidden hover:shadow-gold-glow transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden bg-background">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] uppercase tracking-wider font-semibold ${badgeStyle[p.badge]}`}>
                  {p.badge}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{p.category}</p>
                <h3 className="font-display font-bold text-lg mb-4">{p.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gradient-gold font-display font-extrabold text-xl">{p.price}</span>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors">
                    Ver más <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
