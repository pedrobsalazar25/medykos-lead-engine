import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, FileSearch, Palette, Rocket, BarChart } from "lucide-react";
import { useRef } from "react";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section id="proceso" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Subtle parallax background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]) }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        {/* Section header with parallax */}
        <motion.div
          style={{ y: headerY }}
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
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Un proceso claro y transparente para garantizar resultados.
          </motion.p>
        </motion.div>

        {/* Process steps with animated connecting line */}
        <div className="relative mx-auto max-w-3xl">
          {/* Animated progress line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary to-primary/60 origin-top"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative mb-8 flex gap-6 last:mb-0"
            >
              {/* Number circle with pulse animation */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.12 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <span className="relative z-10">{step.number}</span>
              </motion.div>

              {/* Content card */}
              <motion.div 
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex-1 rounded-2xl bg-card p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-3 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
