import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Wait for exit animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-hero"
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
            />
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  y: 100,
                  x: Math.random() * 100 - 50 
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  y: -100,
                  x: Math.random() * 100 - 50
                }}
                transition={{
                  duration: 2,
                  delay: 0.3 + i * 0.15,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="absolute h-1 w-1 rounded-full bg-primary"
                style={{
                  left: `${20 + i * 12}%`,
                  top: "60%"
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2
              }}
              className="relative"
            >
              {/* Logo glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-8 rounded-full bg-primary/20 blur-2xl"
              />
              
              {/* Logo text */}
              <motion.h1
                className="relative font-heading text-5xl font-bold text-hero-foreground md:text-6xl"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="inline-block"
                >
                  Medy
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="inline-block text-primary"
                >
                  kos
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center text-sm text-hero-foreground/60 md:text-base"
            >
              Marketing Médico que Atrae Pacientes
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
              className="mt-4 flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="h-2 w-2 rounded-full bg-primary"
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 h-1 origin-left"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
