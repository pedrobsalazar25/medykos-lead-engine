import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Funcionalidades", to: "/funcionalidades" },
  { label: "Demos", href: "#demos" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  // Transform for header shrink effect
  const headerPadding = useTransform(scrollY, [0, 100], [16, 8]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className="fixed left-0 right-0 top-0 z-50"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <motion.div 
        className={`backdrop-blur-xl transition-colors duration-300 ${
          isScrolled ? "bg-hero/95 shadow-lg" : "bg-hero/80"
        }`}
      >
        <motion.div 
          className="container mx-auto flex items-center justify-between px-5 md:px-8"
          style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
        >
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2"
            style={{ scale: logoScale }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-heading text-xl md:text-2xl font-bold text-hero-foreground">
              Medikos
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-hero-foreground/80 hover:text-hero-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("#contacto")}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Consulta Gratuita
            </button>
          </nav>

          {/* Mobile: WhatsApp button in header */}
          <motion.a
            href={`https://wa.me/34604065849?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre los servicios de Medikos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white md:hidden"
            aria-label="Contactar por WhatsApp"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(37, 211, 102, 0.4)",
                "0 0 0 10px rgba(37, 211, 102, 0)",
                "0 0 0 0 rgba(37, 211, 102, 0)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
