import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import PlatformFeatures from "@/components/PlatformFeatures";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadConnectorWidget from "@/components/LeadConnectorWidget";
import heroImage from "@/assets/funcionalidades-hero.jpg";

const Funcionalidades = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative isolate overflow-hidden bg-hero pt-28 pb-16 md:pt-36 md:pb-24">
        <img
          src={heroImage}
          alt="Interior de clínica médica moderna con iluminación tecnológica"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-hero/80 via-hero/70 to-background" />

        <div className="container mx-auto px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-hero-foreground/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Ecosistema Médico Completo
            </span>
            <h1 className="mt-5 font-heading text-3xl font-bold text-hero-foreground md:text-5xl">
              Todas las Funcionalidades Incluidas en Tu Sitio Web
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/80">
              Sitio web público, panel administrativo y portal del paciente: un sistema integral
              para captar pacientes y automatizar tu clínica.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="pb-24 md:pb-0">
        <PlatformFeatures />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadConnectorWidget />
      <BottomNav />
    </div>
  );
};

export default Funcionalidades;
