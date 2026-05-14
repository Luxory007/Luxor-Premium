import { Instagram, MessageCircle, Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Luxor Store" className="h-12 w-12 rounded-full ring-1 ring-primary/40" />
              <div>
                <div className="font-display font-extrabold text-lg">
                  Luxor <span className="text-gradient-gold">Store</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Premium Ebooks</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Conocimiento que transforma · Resultados que perduran. La tienda premium de infoproductos digitales para quienes apuntan más alto.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">Explora</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#catalogo" className="hover:text-primary transition-colors">Catálogo</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Beneficios</a></li>
              <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://www.instagram.com/luxor.store.premium/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass gold-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/573209403080" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass gold-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/Luxor.Premium" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass gold-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="mailto:Luxor.Store.Premium@gmail.com" aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-full glass gold-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground break-all">Luxor.Store.Premium@gmail.com</p>
            <p className="text-xs text-muted-foreground mt-1">WhatsApp: +57 320 940 3080</p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Luxor Store Premium. Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.25em]">Luxor · Conocimiento que Transforma</p>
        </div>
      </div>
    </footer>
  );
}
