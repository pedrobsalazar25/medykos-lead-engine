import { motion, useScroll, useTransform } from "framer-motion";
import { Stethoscope, Sparkles, UserPlus, FileText, Video, Mail } from "lucide-react";
import { useRef } from "react";

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

const SpecializedServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="section-dark section-padding relative overflow-hidden">
      {/* Animated background with parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          style={{ opacity: headerOpacity }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-4 flex justify-center"
          >
            <div className="accent-line origin-center" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 font-heading text-3xl font-bold text-surface-dark-foreground md:text-4xl lg:text-5xl"
          >
            Servicios Especializados
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-surface-dark-foreground/70"
          >
            Soluciones avanzadas para necesidades específicas del sector salud.
          </motion.p>
        </motion.div>

        {/* Services grid with 3D reveal */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specializedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 80, 
                rotateX: -15,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group rounded-2xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/5 p-6 transition-all hover:border-primary/50 hover:bg-surface-dark-foreground/10 backdrop-blur-sm"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <service.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold text-surface-dark-foreground">
                {service.title}
              </h3>
              <p className="text-surface-dark-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
