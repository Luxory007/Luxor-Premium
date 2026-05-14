import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cómo recibo el producto?", a: "Recibirás un correo con el enlace de descarga inmediatamente después de tu compra." },
  { q: "¿El acceso es inmediato?", a: "Sí. Todos los productos son digitales y se entregan al instante tras confirmar el pago." },
  { q: "¿Puedo usarlo en móvil?", a: "Por supuesto. Todos nuestros recursos son compatibles con móvil, tablet y escritorio." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos tarjetas, PayPal, transferencias y plataformas de pago locales seguras." },
  { q: "¿Los productos son descargables?", a: "Sí, descargables y tuyos para siempre. Sin suscripciones ni cargos ocultos." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
            Preguntas <span className="text-gradient-gold">frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="rounded-2xl bg-gradient-card glass px-6 border-0">
              <AccordionTrigger className="text-left font-display font-semibold text-base hover:text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
