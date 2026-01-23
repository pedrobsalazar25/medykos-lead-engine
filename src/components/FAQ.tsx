import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section id="faq" className="section-padding bg-secondary/30">
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
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Resolvemos tus dudas sobre nuestros servicios de marketing médico.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-none bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="faq-trigger text-left text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
