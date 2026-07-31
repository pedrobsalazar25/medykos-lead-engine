import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="section-dark hidden md:block">
      <div className="container mx-auto px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-heading text-2xl font-bold text-surface-dark-foreground">
              Medikos
            </h3>
            <p className="mb-6 max-w-md text-surface-dark-foreground/70">
              Agencia especializada en marketing digital para el sector médico y estético. Ayudamos a profesionales de la salud a destacar online y captar más pacientes.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+34604065849"
                className="flex items-center gap-3 text-surface-dark-foreground/70 transition-colors hover:text-surface-dark-foreground"
              >
                <Phone className="h-5 w-5 text-primary" />
                +34 604 065 849
              </a>
              <a
                href="mailto:info@medykos.com"
                className="flex items-center gap-3 text-surface-dark-foreground/70 transition-colors hover:text-surface-dark-foreground"
              >
                <Mail className="h-5 w-5 text-primary" />
                info@medykos.com
              </a>
              <div className="flex items-center gap-3 text-surface-dark-foreground/70">
                <MapPin className="h-5 w-5 text-primary" />
                España
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-surface-dark-foreground">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Paquetes", href: "#paquetes" },
                { label: "Proceso", href: "#proceso" },
                { label: "FAQ", href: "#faq" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-surface-dark-foreground/70 transition-colors hover:text-surface-dark-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-surface-dark-foreground">Servicios</h4>
            <ul className="space-y-3 text-surface-dark-foreground/70">
              <li>Diseño Web Médico</li>
              <li>SEO Médico</li>
              <li>Google Ads</li>
              <li>Contenido Médico</li>
              <li>Redes Sociales</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-surface-dark-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-surface-dark-foreground/50 md:flex-row">
            <p>© {currentYear} Medikos. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <button className="transition-colors hover:text-surface-dark-foreground">
                Política de Privacidad
              </button>
              <button className="transition-colors hover:text-surface-dark-foreground">
                Aviso Legal
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
