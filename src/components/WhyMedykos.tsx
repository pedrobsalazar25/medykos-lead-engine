import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Shield, Lightbulb, HeartPulse } from "lucide-react";

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

const WhyMedykos = () => {
  return (
    <section className="section-padding bg-secondary/30">
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
            ¿Por qué Medykos?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Somos la agencia de marketing que entiende las necesidades únicas del sector médico y estético.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-service group"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-7 w-7" />
              </div>
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
