import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, Package, LayoutGrid, Monitor, MessageCircle } from "lucide-react";

const navItems = [
  { id: "inicio", label: "Inicio", icon: Home, href: "#" },
  { id: "servicios", label: "Servicios", icon: Briefcase, href: "#servicios" },
  { id: "paquetes", label: "Paquetes", icon: Package, href: "#paquetes" },
  { id: "funcionalidades", label: "Funciones", icon: LayoutGrid, to: "/funcionalidades" },
  { id: "demos", label: "Demos", icon: Monitor, href: "#demos" },
  { id: "contacto", label: "Contacto", icon: MessageCircle, href: "#contacto" },
];


const BottomNav = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const navigate = useNavigate();
  const location = useLocation();


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

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Check if at top for "inicio"
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("inicio");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = (item: (typeof navItems)[number]) => {
    if (item.to) {
      navigate(item.to);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname !== "/") {
      navigate(item.href === "#" ? "/" : `/${item.href}`);
      return;
    }
    if (item.href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(item.href!);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="bg-hero/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.to
              ? location.pathname === item.to
              : location.pathname === "/" && activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className="relative flex flex-col items-center justify-center px-2 py-2 min-w-[56px] tap-highlight-none active:scale-95 transition-transform"
              >

                <motion.div
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    y: isActive ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute -inset-2 rounded-xl bg-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon
                    className={`relative z-10 h-5 w-5 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-hero-foreground/60"
                    }`}
                  />
                </motion.div>
                <span
                  className={`mt-1 text-[10px] font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-hero-foreground/60"
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNav;
