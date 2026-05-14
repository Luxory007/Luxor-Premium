import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || name.length > 100) return setError("Nombre inválido (máx 100)"), setStatus("error");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setError("Email inválido"), setStatus("error");
    if (!message || message.length > 1000) return setError("Mensaje inválido (máx 1000)"), setStatus("error");

    try {
      const res = await fetch("https://formspree.io/f/xykoqjvw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Error al enviar");
      form.reset();
      setStatus("success");
    } catch {
      setError("No pudimos enviar tu solicitud. Intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-primary/5 blur-[140px] pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Contáctanos</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl">
            Solicitudes de <span className="text-gradient-gold">Cliente</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            ¿Tienes una pregunta o necesitas asesoría premium? Escríbenos y te respondemos en menos de 24 h.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-gradient-card glass gold-border p-6 sm:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Nombre</label>
              <input id="name" name="name" type="text" required maxLength={100} className="w-full rounded-lg bg-background/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email</label>
              <input id="email" name="email" type="email" required maxLength={255} className="w-full rounded-lg bg-background/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-sm" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Asunto</label>
            <input id="subject" name="subject" type="text" maxLength={150} className="w-full rounded-lg bg-background/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Mensaje</label>
            <textarea id="message" name="message" required maxLength={1000} rows={5} className="w-full rounded-lg bg-background/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none px-4 py-3 text-sm resize-none" />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 className="h-4 w-4" /> ¡Solicitud enviada! Te contactaremos pronto.
            </div>
          )}

          <button type="submit" disabled={status === "loading"} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed">
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
          </button>
        </form>
      </div>
    </section>
  );
}
