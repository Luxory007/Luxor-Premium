import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "@/assets/hero-mockups.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
      <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full glass gold-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Edición Premium · 2026
          </div>

          <h1 className="font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Infoproductos <span className="text-gradient-gold">Premium</span> para Aprender, Crecer y <span className="text-gradient-gold">Monetizar</span> Online
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Accede a ebooks, cursos y recursos digitales diseñados para ayudarte a desarrollar habilidades rentables y crecer en el mundo digital — con la calidad que tu negocio merece.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#catalogo" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-105 transition-transform">
              Explorar Catálogo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#porque" className="inline-flex items-center justify-center gap-2 rounded-full glass gold-border px-7 py-4 text-sm font-semibold text-foreground hover:bg-primary/10 transition-colors">
              Descubrir Productos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <div><span className="text-gradient-gold font-display font-bold text-2xl">+12K</span> Estudiantes</div>
            <div><span className="text-gradient-gold font-display font-bold text-2xl">4.9★</span> Valoración</div>
            <div><span className="text-gradient-gold font-display font-bold text-2xl">100%</span> Acceso 24/7</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-transparent rounded-[2.5rem] blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden gold-border shadow-luxe">
            <img src={heroImg} alt="Mockups premium de ebooks y cursos Luxor Store" className="w-full h-auto float" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
