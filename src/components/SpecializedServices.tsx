import { motion } from "framer-motion";
import { Stethoscope, Sparkles, UserPlus, FileText, Video, Mail } from "lucide-react";

const specializedServices = [
  {
    icon: Stethoscope,
    title: "Marketing para Médicos Especialistas",
    description: "Estrategias específicas para dermatólogos, cirujanos plásticos, ginecólogos y otras especialidades.",
  },
  {
    icon: Sparkles,
    title: "Marketing Estético",
    description: "Campañas para clínicas de medicina estética, spa médico y tratamientos de belleza.",
  },
  {
    icon: UserPlus,
    title: "Captación de Pacientes Internacionales",
    description: "Marketing multilingüe para atraer pacientes de turismo médico.",
  },
  {
    icon: FileText,
    title: "Gestión de Reputación Online",
    description: "Monitorización y gestión de reseñas en Google, Doctoralia y otras plataformas.",
  },
  {
    icon: Video,
    title: "Video Marketing Médico",
    description: "Producción de vídeos testimoniales, procedimientos y contenido educativo.",
  },
  {
    icon: Mail,
    title: "Email Marketing Médico",
    description: "Campañas de fidelización y newsletters para mantener conectados a tus pacientes.",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const SpecializedServices = () => {
  return (
    <section className="section-dark section-padding">
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
          <h2 className="mb-4 font-serif text-3xl font-bold text-surface-dark-foreground md:text-4xl lg:text-5xl">
            Servicios Especializados
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-surface-dark-foreground/70">
            Soluciones avanzadas para necesidades específicas del sector salud.
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
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/5 p-6 transition-all hover:border-primary/50 hover:bg-surface-dark-foreground/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-surface-dark-foreground">
                {service.title}
              </h3>
              <p className="text-surface-dark-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecializedServices;
