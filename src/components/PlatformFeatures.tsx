import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarCheck,
  Calculator,
  Sparkles,
  AlertCircle,
  BookOpen,
  MoonStar,
  LayoutDashboard,
  Calendar,
  CheckCircle2,
  FileText,
  BarChart3,
  UserPlus,
  Lock,
  History,
  LineChart,
  Receipt,
  UploadCloud,
  UserCheck,
  Globe,
  Settings2,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  subtitle: string;
  text: string;
  icon: LucideIcon;
};

type Tab = {
  id: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  features: Feature[];
  showcase: {
    eyebrow: string;
    title: string;
    text: string;
    stats: { label: string; value: string }[];
  };
};

const tabs: Tab[] = [
  {
    id: "sitio",
    label: "Sitio Web Público",
    shortLabel: "Sitio Web",
    icon: Globe,
    features: [
      {
        title: "Reserva de Citas Online en Tiempo Real",
        subtitle: "Conversión 24/7 sin llamadas",
        text: "Permite a tus pacientes agendar consultas escogiendo especialidad, doctor, fecha y hora en segundos.",
        icon: CalendarCheck,
      },
      {
        title: "Calculadora Estimadora de Presupuesto",
        subtitle: "Transparencia y cuotas sin interés",
        text: "Herramienta interactiva que calcula el costo total estimado de los tratamientos y desglose de pagos mensuales.",
        icon: Calculator,
      },
      {
        title: "Simulador de Sonrisa Digital 3D",
        subtitle: "Visualización de resultados antes/después",
        text: "Slider interactivo que muestra el cambio estimado tras tratamientos estéticos, carillas o alineadores.",
        icon: Sparkles,
      },
      {
        title: "Asistente de Urgencias Médicas",
        subtitle: "Triaje rápido y contacto directo",
        text: "Guía de primeros auxilios para dolores agudos que conecta en 1 clic con la guardia vía WhatsApp.",
        icon: AlertCircle,
      },
      {
        title: "Blog Clínico & Guías Educativas",
        subtitle: "Posicionamiento SEO especializado",
        text: "Artículos dedicados sobre salud, cuidados y respuestas frecuentes con páginas individuales optimizadas.",
        icon: BookOpen,
      },
      {
        title: "Experiencia Visual Adaptativa",
        subtitle: "Modo Claro y Oscuro + Preguntas Frecuentes",
        text: "Interfaz accesible con cambio de tema visual y acordeón interactivo para resolver dudas al instante.",
        icon: MoonStar,
      },
    ],
    showcase: {
      eyebrow: "Demo interactiva",
      title: "Simulador 3D / Calculadora de Presupuesto",
      text: "Los pacientes visualizan su resultado estimado y conocen el costo con cuotas antes de escribirte.",
      stats: [
        { label: "Presupuesto estimado", value: "$1.280" },
        { label: "Cuota mensual", value: "$107" },
        { label: "Simulación 3D", value: "Antes / Después" },
      ],
    },
  },
  {
    id: "panel",
    label: "Panel Administrativo",
    shortLabel: "Panel Admin",
    icon: Settings2,
    features: [
      {
        title: "Cuadro de Mando y KPIs en Tiempo Real",
        subtitle: "Control total del rendimiento clínico",
        text: "Métricas clave con total de citas diarias, estado de turnos, nuevos pacientes e ingresos mensuales estimados.",
        icon: LayoutDashboard,
      },
      {
        title: "Calendario Médico Interactivo",
        subtitle: "Programación diaria y mensual",
        text: "Vista organizada por especialista con código de colores según estado: Confirmada, Pendiente, Atendida o Cancelada.",
        icon: Calendar,
      },
      {
        title: "Administrador Maestro de Citas",
        subtitle: "Gestión rápida en 1 Clic",
        text: "Buscador de pacientes, filtros avanzados y cambio inmediato de estado para la recepción.",
        icon: CheckCircle2,
      },
      {
        title: "Historias Clínicas y Expedientes (EHR)",
        subtitle: "Odontogramas y base de datos",
        text: "Expedientes digitales completos con alergias, tipo de sangre, diagnósticos y documentos adjuntos.",
        icon: FileText,
      },
      {
        title: "Estadísticas Financieras & Reportes",
        subtitle: "Gráficos Recharts e ingresos",
        text: "Reportes analíticos sobre productividad médica, rendimiento por tratamiento y tasa de puntualidad.",
        icon: BarChart3,
      },
      {
        title: "Agendador Rápido & Exportación Excel",
        subtitle: "Herramientas aceleradas para recepción",
        text: "Modal express para agendar citas telefónicas y exportación instantánea de base de datos a CSV/Excel.",
        icon: UserPlus,
      },
    ],
    showcase: {
      eyebrow: "Vista del sistema",
      title: "Dashboard Administrativo y Calendario Médico",
      text: "Toda la operación de la clínica en una sola pantalla: turnos del día, estados y métricas del mes.",
      stats: [
        { label: "Citas hoy", value: "24" },
        { label: "Nuevos pacientes", value: "+8" },
        { label: "Ingresos del mes", value: "$14.6K" },
      ],
    },
  },
  {
    id: "portal",
    label: "Portal del Paciente",
    shortLabel: "Portal Paciente",
    icon: HeartPulse,
    features: [
      {
        title: "Acceso Privado Protegido",
        subtitle: "Seguridad y autenticación médica",
        text: "Área personal segura donde el paciente ingresa con credenciales privadas para gestionar sus datos.",
        icon: Lock,
      },
      {
        title: "Gestor de Citas y Historial",
        subtitle: "Control de consultas pasadas y futuras",
        text: "Lista detallada de visitas agendadas, profesional asignado y estado de atención en tiempo real.",
        icon: History,
      },
      {
        title: "Gráficos de Evolución de Salud (Recharts)",
        subtitle: "Seguimiento visual del tratamiento",
        text: "Gráficos interactivos de líneas y barras que muestran el progreso bucal e índices de higiene a lo largo del tiempo.",
        icon: LineChart,
      },
      {
        title: "Descarga de Facturas y Presupuestos",
        subtitle: "Gestión financiera transparente",
        text: "Consulta de saldos, pagos realizados y descarga directa de comprobantes y facturas en PDF.",
        icon: Receipt,
      },
      {
        title: "Subida de Radiografía y Exámenes",
        subtitle: "Pre-evaluación digital",
        text: "Permite al paciente adjuntar radiografías panorámicas o estudios 3D antes de asistir a la clínica.",
        icon: UploadCloud,
      },
      {
        title: "Ficha Médica Personal",
        subtitle: "Datos de salud y contacto de emergencia",
        text: "Resumen accesible con datos personales, alergias registradas y médico de cabecera.",
        icon: UserCheck,
      },
    ],
    showcase: {
      eyebrow: "Área privada",
      title: "Monitoreo de Salud y Facturación del Paciente",
      text: "El paciente sigue su evolución, descarga facturas y sube estudios desde cualquier dispositivo.",
      stats: [
        { label: "Índice de higiene", value: "92%" },
        { label: "Próxima cita", value: "12 Sep" },
        { label: "Saldo pendiente", value: "$0" },
      ],
    },
  },
];

const bars = [45, 70, 55, 85, 65, 95];

const ShowcaseMockup = ({ tab }: { tab: Tab }) => (
  <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-lg md:p-8">
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
    <div className="relative">
      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
        {tab.showcase.eyebrow}
      </span>
      <h3 className="mt-2 font-heading text-xl font-bold text-foreground md:text-2xl">
        {tab.showcase.title}
      </h3>
      <p className="mt-2 text-muted-foreground">{tab.showcase.text}</p>

      {/* Mock window */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-secondary/50">
        <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="space-y-4 p-4 md:p-5">
          <div className="grid grid-cols-3 gap-3">
            {tab.showcase.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-3 shadow-sm">
                <p className="truncate text-[10px] uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1 font-heading text-sm font-bold text-foreground md:text-base">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex h-24 items-end gap-2 rounded-xl bg-card p-3 shadow-sm">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex-1 rounded-md bg-primary/70"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PlatformFeatures = () => {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="funcionalidades" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
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

        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="flex w-full max-w-2xl gap-1 rounded-2xl border border-border bg-secondary p-1.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  aria-pressed={isActive}
                  className="relative flex flex-1 items-center justify-center gap-2 rounded-xl px-2 py-3 text-xs font-semibold transition-colors tap-highlight-none md:text-sm"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 rounded-xl bg-card shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={`relative z-10 h-4 w-4 shrink-0 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <span
                    className={`relative z-10 ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span className="md:hidden">{tab.shortLabel}</span>
                    <span className="hidden md:inline">{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {activeTab.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.article
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="card-service flex flex-col items-start gap-3"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold leading-snug text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-primary">{feature.subtitle}</p>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{feature.text}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-8">
              <ShowcaseMockup tab={activeTab} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PlatformFeatures;
