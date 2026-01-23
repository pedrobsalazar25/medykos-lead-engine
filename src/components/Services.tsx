import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Search, Megaphone, PenTool, BarChart3, Users } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Diseño Web Médico",
    description: "Webs profesionales optimizadas para conversión, con diseño responsive y enfocadas en la captación de pacientes.",
    features: ["Diseño responsive", "Optimización SEO", "Integración con CRM"],
  },
  {
    icon: Search,
    title: "SEO Médico",
    description: "Posicionamiento orgánico especializado para que tus pacientes potenciales te encuentren primero.",
    features: ["SEO local", "Contenidos médicos", "Link building ético"],
  },
  {
    icon: Megaphone,
    title: "Google Ads Médico",
    description: "Campañas de pago por clic diseñadas para maximizar el retorno de inversión en el sector salud.",
    features: ["Campañas search", "Display médico", "Remarketing"],
  },
  {
    icon: PenTool,
    title: "Contenido Médico",
    description: "Creación de contenidos especializados que posicionan tu expertise y generan confianza.",
    features: ["Blog médico", "Casos de estudio", "Vídeo marketing"],
  },
  {
    icon: BarChart3,
    title: "Analítica y Reporting",
    description: "Medición constante de resultados para optimizar cada acción de marketing.",
    features: ["Dashboards personalizados", "Informes mensuales", "KPIs médicos"],
  },
  {
    icon: Users,
    title: "Redes Sociales Médicas",
    description: "Gestión profesional de redes sociales con contenido que respeta la ética médica.",
    features: ["Instagram médico", "LinkedIn profesional", "Facebook Ads"],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="servicios" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY, opacity }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 mx-auto h-1 rounded-full bg-gradient-to-r from-primary to-primary/60"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            Servicios Principales
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Soluciones integrales de marketing digital diseñadas específicamente para el sector médico y estético.
          </motion.p>
        </motion.div>

        {/* Services grid with 3D-like staggered reveal */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="card-service group"
            >
              <motion.div 
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <service.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <motion.span 
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
