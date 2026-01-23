import { useState } from "react";
import { motion } from "framer-motion";
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="bg-hero/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-5 py-4 md:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-hero-foreground">
              Medykos
            </span>
          </a>

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
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden bg-hero/95 backdrop-blur-lg md:hidden"
      >
        <nav className="container mx-auto flex flex-col gap-4 px-5 py-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="py-2 text-left text-lg font-medium text-hero-foreground/80 transition-colors hover:text-hero-foreground"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contacto")}
            className="mt-2 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-primary-foreground"
          >
            Consulta Gratuita
          </button>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
