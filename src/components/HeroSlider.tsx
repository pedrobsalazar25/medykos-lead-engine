import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const slides = [
  {
    id: 1,
    image: heroBg1,
    headline: "Marketing digital que conecta pacientes con tu clínica",
    subheadline: "Estrategias probadas para médicos, clínicas y centros de salud.",
  },
  {
    id: 2,
    image: heroBg2,
    headline: "Tu equipo de marketing médico especializado",
    subheadline: "Más de 10 años posicionando profesionales de la salud online.",
  },
  {
    id: 3,
    image: heroBg3,
    headline: "Citas por WhatsApp: la forma más fácil de agendar pacientes",
    subheadline: "Tus pacientes pueden reservar cita directamente desde su móvil. Simple, rápido y efectivo.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-5 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Logo badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-hero-foreground/20 bg-hero-foreground/10 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-hero-foreground">
                  Medikos
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-sm text-hero-foreground/70">
                  Marketing Médico
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-hero-foreground md:text-5xl lg:text-6xl">
                {slides[currentSlide].headline}
              </h1>

              {/* Subheadline */}
              <p className="mb-8 max-w-xl text-lg text-hero-foreground/80 md:text-xl">
                {slides[currentSlide].subheadline}
              </p>

              {/* CTA */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-hero text-base md:text-lg"
              >
                Solicitar consulta gratuita
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <div className="absolute inset-y-0 left-4 z-20 hidden items-center md:flex">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-hero-foreground/10 text-hero-foreground backdrop-blur-sm transition-all hover:bg-hero-foreground/20"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 hidden items-center md:flex">
        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-hero-foreground/10 text-hero-foreground backdrop-blur-sm transition-all hover:bg-hero-foreground/20"
          aria-label="Siguiente slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2 bg-hero-foreground/40 hover:bg-hero-foreground/60"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-hero-foreground/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-6 w-4 rounded-full border-2 border-hero-foreground/40"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-auto mt-1 h-1.5 w-1 rounded-full bg-hero-foreground/60"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
