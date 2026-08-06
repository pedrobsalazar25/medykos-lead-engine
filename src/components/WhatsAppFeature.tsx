import { motion } from "framer-motion";
import { MessageCircle, Calendar, Clock, ArrowRight } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-appointment-mockup.png";

const WhatsAppFeature = () => {
  const scrollToDemos = () => {
    const demosSection = document.getElementById("demos");
    if (demosSection) {
      demosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <div className="accent-line origin-left" />
            </motion.div>

            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Citas por WhatsApp: <br />
              <span className="text-primary">sin complicaciones</span>
            </h2>

            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Imagina que tus pacientes pueden agendar una cita desde su móvil en segundos, 
              directamente por WhatsApp. Sin llamadas, sin esperas, sin formularios complicados. 
              Así de fácil es lo que ofrecemos a tu clínica.
            </p>

            <div className="mb-8 space-y-4">
              {[
                { icon: MessageCircle, text: "Comunicación directa por WhatsApp" },
                { icon: Calendar, text: "Agenda organizada automáticamente" },
                { icon: Clock, text: "Disponible 24/7 para tus pacientes" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <motion.button
                onClick={scrollToDemos}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-hero group"
              >
                Ver ejemplo en vivo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            <p className="mt-4 text-sm text-muted-foreground italic">
              Prueba cómo funciona en nuestra sección de contacto ↓
            </p>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Phone image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={whatsappMockup}
                  alt="Sistema de citas por WhatsApp - ejemplo de la interfaz"
                  className="w-full max-w-sm rounded-3xl shadow-2xl"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="absolute -left-4 top-1/4 bg-card rounded-xl p-3 shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">WhatsApp</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-3 shadow-lg border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Cita confirmada</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppFeature;
