import { motion } from "framer-motion";
import { Globe, Search, Megaphone, PenTool, BarChart3, Users } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="servicios" className="section-padding">
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
            Servicios Principales
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Soluciones integrales de marketing digital diseñadas específicamente para el sector médico y estético.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-service group"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-muted-foreground">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
