import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, TrendingUp, Shield, Lightbulb, HeartPulse } from "lucide-react";
import { useRef } from "react";

const reasons = [
  {
    icon: HeartPulse,
    title: "Especialización médica",
    description: "Entendemos las regulaciones y sensibilidades del sector salud.",
  },
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Estrategias medibles orientadas a la captación real de pacientes.",
  },
  {
    icon: Users,
    title: "Experiencia comprobada",
    description: "Más de 10 años trabajando con profesionales de la salud.",
  },
  {
    icon: TrendingUp,
    title: "ROI garantizado",
    description: "Optimizamos cada euro invertido para maximizar tu retorno.",
  },
  {
    icon: Shield,
    title: "Ética y confidencialidad",
    description: "Respetamos la privacidad y las normativas del sector médico.",
  },
  {
    icon: Lightbulb,
    title: "Innovación constante",
    description: "Aplicamos las últimas tendencias en marketing digital.",
  },
];

const WhyMedykos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different elements
  const headerY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Decorative parallax elements */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />

        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-12 text-center md:mb-16 relative z-10"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 flex justify-center"
          >
            <div className="accent-line origin-center" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            ¿Por qué Medykos?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Somos la agencia de marketing que entiende las necesidades únicas del sector médico y estético.
          </motion.p>
        </motion.div>

        {/* Reasons grid with staggered parallax */}
        <motion.div
          style={{ y: gridY }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="card-service group perspective-1000"
            >
              <motion.div 
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <reason.icon className="h-7 w-7" />
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMedykos;
