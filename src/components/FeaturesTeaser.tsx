import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Settings2, HeartPulse } from "lucide-react";

const modules = [
  { id: "sitio", icon: Globe, title: "Sitio Web Público", text: "Reservas online, calculadora de presupuesto y blog clínico." },
  { id: "panel", icon: Settings2, title: "Panel Administrativo", text: "Dashboard con KPIs, calendario médico e historias clínicas." },
  { id: "portal", icon: HeartPulse, title: "Portal del Paciente", text: "Área privada con historial, gráficos de salud y facturas." },
];

const FeaturesTeaser = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Ecosistema Médico Completo
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Todas las Funcionalidades Incluidas en Tu Sitio Web
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Un sistema integral diseñado para captar pacientes, automatizar la gestión clínica y
            mejorar la experiencia médica.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="card-service flex flex-col items-start gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{m.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{m.text}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/funcionalidades" className="btn-hero gap-2">
            Ver todas las funcionalidades
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTeaser;
