import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MessageSquare } from "lucide-react";

const FORM_SCRIPT_ID = "leadconnector-form-embed";

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.getElementById(FORM_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = FORM_SCRIPT_ID;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [120, -20]);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    comentarios: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(newErrors);
      toast({
        title: "Error en el formulario",
        description: "Por favor, revisa los campos marcados.",
        variant: "destructive",
      });
      return;
    }

    const message = `Hola, mi nombre es ${formData.nombre}.
Quiero solicitar una consulta gratuita con Medikos.

Email: ${formData.email}
Fecha preferida de consulta: ${formData.fecha}
Comentarios: ${formData.comentarios || "Sin comentarios adicionales"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se abrirá una nueva pestaña con tu mensaje preparado.",
    });
  };

  return (
    <section id="contacto" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Parallax background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/3 blur-3xl"
        />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Info with parallax */}
            <motion.div
              style={{ y: leftColumnY }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 flex"
                >
                  <div className="accent-line origin-left" />
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl"
                >
                  Agenda tu consulta gratuita
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8 text-lg text-muted-foreground"
                >
                  Cuéntanos sobre tu clínica y tus objetivos. Analizaremos tu situación y te propondremos una estrategia personalizada sin compromiso.
                </motion.p>

                <div className="space-y-6">
                  {[
                    { icon: MessageSquare, title: "Respuesta rápida", desc: "Te respondemos en menos de 24 horas laborables." },
                    { icon: Calendar, title: "Flexibilidad horaria", desc: "Adaptamos la consulta a tu disponibilidad." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="flex items-start gap-4"
                    >
                      <motion.div 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <item.icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right column - Form with parallax */}
            <motion.div
              style={{ y: rightColumnY }}
            >
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-lg md:p-8 hover:shadow-xl transition-shadow">
                  <div className="space-y-5">
                    {/* Nombre */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="nombre" className="flex items-center gap-2 text-foreground">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Nombre *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={errors.nombre ? "border-destructive" : ""}
                      />
                      {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
                    </motion.div>

                    {/* Email */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </motion.div>

                    {/* Fecha */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="fecha" className="flex items-center gap-2 text-foreground">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Fecha preferida de consulta *
                      </Label>
                      <Input
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={errors.fecha ? "border-destructive" : ""}
                      />
                      {errors.fecha && <p className="text-sm text-destructive">{errors.fecha}</p>}
                    </motion.div>

                    {/* Comentarios */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.35 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="comentarios" className="flex items-center gap-2 text-foreground">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        Comentarios
                      </Label>
                      <Textarea
                        id="comentarios"
                        name="comentarios"
                        placeholder="Cuéntanos sobre tu clínica y tus objetivos..."
                        value={formData.comentarios}
                        onChange={handleChange}
                        rows={4}
                      />
                    </motion.div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-hero flex w-full items-center justify-center gap-3"
                    >
                      <Send className="h-5 w-5" />
                      Agendar consulta por WhatsApp
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
