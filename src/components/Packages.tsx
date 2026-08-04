import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useRef } from "react";

const packages = [
  {
    name: "Esencial",
    subtitle: "Para clínicas que inician",
    price: "$390",
    featured: false,
    features: [
      "Diseño web profesional (hasta 5 páginas)",
      "Optimización SEO básica",
      "Diseño responsive",
      "Formulario de contacto",
      "Integración con Google Analytics",
      "SSL incluido",
      "Soporte por email",
    ],
    cta: "Solicitar información",
  },
  {
    name: "Premium",
    subtitle: "Para clínicas que quieren destacar",
    price: "$500",
    featured: true,
    features: [
      "Todo lo del paquete Esencial",
      "Hasta 10 páginas personalizadas",
      "SEO avanzado on-page",
      "Blog integrado",
      "Sistema de citas por WhatsApp",
      "Chat en vivo",
      "Integración con CRM",
      "Optimización de velocidad",
      "Soporte prioritario 24/7",
    ],
    cta: "Solicitar información",
  },
];

const Packages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [150, -30]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="paquetes" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 flex justify-center"
          >
            <div className="accent-line origin-center" />
          </motion.div>
            <motion.h2 
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            Paquetes de Diseño Web
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Soluciones adaptadas a las necesidades de cada clínica médica o centro estético.
          </motion.p>
        </motion.div>

        {/* Packages grid with parallax offset */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              style={{ y: index === 0 ? card1Y : card2Y }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 60, rotateY: index === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`card-package h-full ${pkg.featured ? "card-package-featured" : ""}`}
              >
                {pkg.featured && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center gap-2 bg-primary py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Star className="h-4 w-4" />
                    </motion.div>
                    Más popular
                  </motion.div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mb-4 text-muted-foreground">{pkg.subtitle}</p>
                  <div className="mb-6">
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-4xl font-bold text-foreground"
                    >
                      {pkg.price}
                    </motion.span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + idx * 0.05, type: "spring" }}
                        >
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        </motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-lg py-3 font-semibold transition-all ${
                      pkg.featured
                        ? "btn-hero"
                        : "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {pkg.cta}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
