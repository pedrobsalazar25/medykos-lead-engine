import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const packages = [
  {
    name: "Esencial",
    subtitle: "Para clínicas que inician",
    price: "Desde 1.200€",
    period: "pago único",
    featured: false,
    features: [
      "Diseño web profesional (hasta 5 páginas)",
      "Optimización SEO básica",
      "Diseño responsive",
      "Formulario de contacto",
      "Integración con Google Analytics",
      "SSL incluido",
      "1 mes de soporte",
    ],
    cta: "Solicitar información",
  },
  {
    name: "Premium",
    subtitle: "Para clínicas que quieren destacar",
    price: "Desde 2.500€",
    period: "pago único",
    featured: true,
    features: [
      "Todo lo del paquete Esencial",
      "Hasta 10 páginas personalizadas",
      "SEO avanzado on-page",
      "Blog integrado",
      "Sistema de citas online",
      "Chat en vivo",
      "Integración con CRM",
      "Optimización de velocidad",
      "3 meses de soporte",
    ],
    cta: "Solicitar información",
  },
];

const Packages = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="paquetes" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-4 flex justify-center">
            <div className="accent-line" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Paquetes de Diseño Web
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Soluciones adaptadas a las necesidades de cada clínica médica o centro estético.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-package ${pkg.featured ? "card-package-featured" : ""}`}
            >
              {pkg.featured && (
                <div className="flex items-center justify-center gap-2 bg-primary py-3 text-sm font-semibold text-primary-foreground">
                  <Star className="h-4 w-4" />
                  Más popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mb-4 text-muted-foreground">{pkg.subtitle}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground"> / {pkg.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className={`w-full rounded-lg py-3 font-semibold transition-all ${
                    pkg.featured
                      ? "btn-hero"
                      : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
