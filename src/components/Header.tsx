import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
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

          {/* Mobile: Empty space to balance layout since hamburger is removed */}
          <div className="w-10 md:hidden" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
