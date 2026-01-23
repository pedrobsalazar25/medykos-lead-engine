import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
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
            <span className="font-serif text-xl md:text-2xl font-bold text-hero-foreground">
              Medykos
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="link-underline text-sm font-medium text-hero-foreground/80 transition-colors hover:text-hero-foreground"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contacto")}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Consulta Gratuita
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-hero-foreground md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-hero/98 backdrop-blur-xl md:hidden"
      >
        <nav className="container mx-auto flex flex-col gap-3 px-5 py-5">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              whileTap={{ scale: 0.98 }}
              className="py-3 px-4 text-left text-base font-medium text-hero-foreground/80 transition-colors hover:text-hero-foreground active:bg-white/5 rounded-xl"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection("#contacto")}
            whileTap={{ scale: 0.98 }}
            className="mt-2 rounded-xl bg-primary px-5 py-3.5 text-center font-semibold text-primary-foreground active:bg-primary/90"
          >
            Consulta Gratuita
          </motion.button>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
