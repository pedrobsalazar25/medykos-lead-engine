import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const PORTFOLIO_URL = "https://pedrobarrios.com/portfolio";

type Project = {
  name: string;
  domain: string;
  category: string;
  description: string;
};

const projects: Project[] = [
  {
    name: "Smile Sanctuary",
    domain: "smilesanctuary.net",
    category: "Salud",
    description: "Clínica dental con atención integral y odontología estética.",
  },
  {
    name: "Medikos",
    domain: "medikos.net",
    category: "Salud",
    description: "Marketing digital para prácticas médicas y estéticas.",
  },
  {
    name: "Marketing Innovations",
    domain: "marketinginnovations.biz",
    category: "Marketing Digital",
    description: "Agencia de marketing enfocada en optimización de ROI.",
  },
  {
    name: "Debt Relief Help",
    domain: "debtreliefhelp.org",
    category: "Servicios Financieros",
    description: "Negociación y alivio de deudas personales y empresariales.",
  },
  {
    name: "Neotropic Foundation",
    domain: "neotropicfoundation.org",
    category: "Sin Fines de Lucro",
    description: "Fundación ambiental y de conservación.",
  },
  {
    name: "Axiom Financial",
    domain: "axiomfinancialllc.com",
    category: "Servicios Financieros",
    description: "Consultoría financiera y experiencia empresarial.",
  },
  {
    name: "Explore Costa Rica",
    domain: "explorecostarica.net",
    category: "Viajes y Turismo",
    description: "Servicios de aventura y reubicación en Costa Rica.",
  },
  {
    name: "Green Power Solar Systems",
    domain: "greenpowersolarsystems.com",
    category: "Energía Renovable",
    description: "Sistemas solares y soluciones de energía verde.",
  },
  {
    name: "Webs para Abogados",
    domain: "websparaabogados.com",
    category: "Servicios Legales",
    description: "Diseño web para bufetes de abogados en España y Panamá.",
  },
  {
    name: "Vivienda Latina USA",
    domain: "viviendalatinausa.com",
    category: "Bienes Raíces",
    description: "Hipotecas e inversión inmobiliaria para latinos en USA.",
  },
  {
    name: "Sewage Treatment CR",
    domain: "sewagetreatmentcr.net",
    category: "Servicios Ambientales",
    description: "Tratamiento ecológico de aguas residuales con tecnología LZT.",
  },
  {
    name: "Mortgage Freedom",
    domain: "mortgagefreedom.org",
    category: "Servicios Financieros",
    description: "Optimización de estrategias hipotecarias y flujo de caja.",
  },
  {
    name: "Costa Rica Loan Experts",
    domain: "costaricaloanexperts.net",
    category: "Bienes Raíces",
    description: "Préstamos privados respaldados por propiedades.",
  },
  {
    name: "700 Club",
    domain: "700club.net",
    category: "Servicios de Crédito",
    description: "Reparación de crédito, disputas y restauración de identidad.",
  },
];

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const openPortfolio = () => {
  window.open(PORTFOLIO_URL, "_blank", "noopener,noreferrer");
};

const Portfolio = () => {
  const items = useMemo(() => shuffle(projects), []);
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused) return;

    let frame: number;
    const step = () => {
      if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 0.6;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <section id="portafolio" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl px-5 md:px-0"
        >
          <div className="accent-line mb-4" />
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Proyectos <span className="text-primary">realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sitios web que hemos diseñado y desarrollado para clínicas, negocios y
            profesionales de distintos sectores.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-none md:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {[...items, ...items].map((project, index) => (
          <button
            key={`${project.domain}-${index}`}
            onClick={openPortfolio}
            className="group relative flex w-[260px] shrink-0 flex-col items-start rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl md:w-[300px]"
          >
            <div className="mb-4 flex w-full items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-secondary">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${project.domain}&sz=64`}
                  alt={`Logo de ${project.name}`}
                  loading="lazy"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>

            <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>

            <h3 className="font-heading text-lg font-bold text-foreground">
              {project.name}
            </h3>
            <p className="mb-3 text-sm text-primary">{project.domain}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </button>
        ))}
      </div>

      <div className="container mx-auto mt-8 flex justify-center px-5">
        <motion.button
          onClick={openPortfolio}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-hero group"
        >
          Ver todos los proyectos
          <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
};

export default Portfolio;
