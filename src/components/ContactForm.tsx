import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, MessageSquare, User, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const WHATSAPP_NUMBER = "34604065849";

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "Nombre demasiado largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email demasiado largo"),
  fecha: z.string().min(1, "Por favor selecciona una fecha"),
  comentarios: z.string().trim().max(1000, "Comentarios demasiado largos").optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
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
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
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

    // Build WhatsApp message
    const message = `Hola, mi nombre es ${formData.nombre}.
Quiero solicitar una consulta gratuita con Medykos.

Email: ${formData.email}
Fecha preferida de consulta: ${formData.fecha}
Comentarios: ${formData.comentarios || "Sin comentarios adicionales"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Show success toast
    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se abrirá una nueva pestaña con tu mensaje preparado.",
    });
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex">
                <div className="accent-line" />
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Agenda tu consulta gratuita
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Cuéntanos sobre tu clínica y tus objetivos. Analizaremos tu situación y te propondremos una estrategia personalizada sin compromiso.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Respuesta rápida</h3>
                    <p className="text-muted-foreground">Te respondemos en menos de 24 horas laborables.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Flexibilidad horaria</h3>
                    <p className="text-muted-foreground">Adaptamos la consulta a tu disponibilidad.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-lg md:p-8">
                <div className="space-y-5">
                  {/* Nombre */}
                  <div className="space-y-2">
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
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
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
                  </div>

                  {/* Fecha */}
                  <div className="space-y-2">
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
                  </div>

                  {/* Comentarios */}
                  <div className="space-y-2">
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
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-hero flex w-full items-center justify-center gap-3"
                  >
                    <Send className="h-5 w-5" />
                    Agendar consulta por WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
