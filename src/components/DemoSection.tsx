import { motion } from "framer-motion";
import { Heart, ExternalLink } from "lucide-react";

const MolarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7.5 3C5 3 3 4.9 3 7.6c0 1.7.5 2.9.9 4.2.4 1.3.5 2.4.6 3.9.1 1.6.3 3 .7 3.9.3.7.8 1.2 1.4 1.2.8 0 1.2-.7 1.4-1.7.2-1 .3-2.2.5-3.1.2-1.1.9-1.8 1.9-1.8h1.2c1 0 1.7.7 1.9 1.8.2.9.3 2.1.5 3.1.2 1 .6 1.7 1.4 1.7.6 0 1.1-.5 1.4-1.2.4-.9.6-2.3.7-3.9.1-1.5.2-2.6.6-3.9.4-1.3.9-2.5.9-4.2C21 4.9 19 3 16.5 3c-1.5 0-2.4.5-3.2.9-.5.3-.9.5-1.3.5s-.8-.2-1.3-.5C9.9 3.5 9 3 7.5 3z" />
    <path d="M9.2 8.2c.8.5 1.8.8 2.8.8s2-.3 2.8-.8" />
  </svg>
);

const demos = [
  {
    title: "Consultorio Dental",
    url: "https://dentistas-demo.vercel.app/",
    description: "Demo de una clínica dental moderna con agendamiento de citas, servicios y contacto directo.",
    icon: ToothIcon,
    label: "Ver demo de dentista",
  },
  {
    title: "Consulta Cardiológica",
    url: "https://cardiologo.pedrobarrios.com",
    description: "Demo de un consultorio cardiológico con información de servicios, estudios y contacto.",
    icon: Heart,
    label: "Ver demo de cardiólogo",
  },
];

const DemoSection = () => {
  return (
    <section id="demos" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Demos en vivo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explora ejemplos reales de sitios web médicos que hemos diseñado para diferentes especialidades.
          </p>
        </motion.div>

        {/* Demo cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {demos.map((demo, index) => (
            <motion.a
              key={demo.url}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -4 }}
              className="group card-service flex flex-col items-start gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <demo.icon className="h-7 w-7 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground md:text-2xl">
                  {demo.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {demo.description}
                </p>
              </div>

              <div className="mt-2 inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-primary/80">
                {demo.label}
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
