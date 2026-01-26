import { motion, useScroll, useTransform } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";

const faqs = [
  {
    question: "¿Qué hace diferente a Medykos de otras agencias de marketing?",
    answer: "Nos especializamos exclusivamente en el sector médico y estético. Entendemos las regulaciones, la ética médica y las sensibilidades del sector salud. No trabajamos con otros sectores, lo que nos permite ofrecer un servicio más especializado y efectivo.",
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer: "Los resultados varían según el servicio. Para Google Ads, puedes ver resultados en las primeras semanas. Para SEO, los resultados significativos suelen verse entre 3-6 meses. Diseño web se entrega en 4-8 semanas dependiendo del paquete.",
  },
  {
    question: "¿Trabajan con clínicas pequeñas o solo grandes centros?",
    answer: "Trabajamos con profesionales de todos los tamaños: desde médicos individuales hasta grandes clínicas y hospitales. Nuestros paquetes se adaptan a diferentes presupuestos y necesidades.",
  },
  {
    question: "¿Cómo garantizan que el contenido cumple con las regulaciones médicas?",
    answer: "Nuestro equipo está formado por profesionales con experiencia en comunicación médica. Todo contenido pasa por un proceso de revisión para asegurar que cumple con las normativas de publicidad sanitaria.",
  },
  {
    question: "¿Ofrecen servicios de mantenimiento web?",
    answer: "Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, copias de seguridad, monitorización de seguridad y soporte técnico continuo.",
  },
  {
    question: "¿Cómo funciona la consulta gratuita?",
    answer: "En la consulta gratuita analizamos tu situación actual, objetivos y necesidades. Te proponemos una estrategia personalizada sin compromiso. La consulta dura aproximadamente 30 minutos y puede ser por videollamada o teléfono.",
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  return (
    <section id="faq" ref={sectionRef} className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
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
            Preguntas Frecuentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Resolvemos tus dudas sobre nuestros servicios de marketing médico.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl border-none bg-card px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="faq-trigger text-left text-lg font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
