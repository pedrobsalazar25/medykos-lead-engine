import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PlatformFeatures from "@/components/PlatformFeatures";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Funcionalidades = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-5 pt-8 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
      <main className="pb-20 md:pb-0">
        <PlatformFeatures />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Funcionalidades;
