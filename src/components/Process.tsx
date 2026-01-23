import { motion } from "framer-motion";
import { MessageCircle, FileSearch, Palette, Rocket, BarChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consulta inicial",
    description: "Analizamos tus necesidades, objetivos y situación actual para diseñar una estrategia personalizada.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Análisis y estrategia",
    description: "Estudiamos tu mercado, competencia y oportunidades para definir el plan de acción más efectivo.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Diseño y desarrollo",
    description: "Creamos los materiales y herramientas necesarias: web, contenidos, campañas, etc.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento",
    description: "Ponemos en marcha tu estrategia de marketing con seguimiento continuo.",
  },
  {
    number: "05",
    icon: BarChart,
    title: "Optimización continua",
    description: "Medimos resultados y optimizamos constantemente para maximizar tu inversión.",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="section-padding">
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
            Cómo Trabajamos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un proceso claro y transparente para garantizar resultados.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative mx-auto max-w-3xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="process-step mb-8 flex gap-6 last:mb-0"
            >
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 rounded-2xl bg-card p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <step.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
