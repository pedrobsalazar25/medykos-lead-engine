import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WhatsAppFeature from "@/components/WhatsAppFeature";
import WhyMedykos from "@/components/WhyMedykos";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import FeaturesTeaser from "@/components/FeaturesTeaser";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import DemoSection from "@/components/DemoSection";
import SpecializedServices from "@/components/SpecializedServices";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/components/SplashScreen";

const SPLASH_SHOWN_KEY = "medikos_splash_shown";

const Index = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => {
    // Skip splash when deep-linking to a section, and only show once per session
    if (typeof window !== "undefined") {
      if (window.location.hash) return false;
      return !sessionStorage.getItem(SPLASH_SHOWN_KEY);
    }
    return true;
  });
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      setAppReady(true);
    }
  }, [showSplash]);

  // Scroll to the hash target once the page content is mounted
  useEffect(() => {
    if (!appReady) return;
    if (!location.hash) return;
    let attempts = 0;
    const tryScroll = () => {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < 20) window.setTimeout(tryScroll, 100);
    };
    const id = window.setTimeout(tryScroll, 50);
    return () => window.clearTimeout(id);
  }, [appReady, location.hash, location.key]);

  const handleSplashComplete = () => {
    sessionStorage.setItem(SPLASH_SHOWN_KEY, "true");
    setShowSplash(false);
    setAppReady(true);
  };


  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {appReady && (
        <>
          <Header />
          <main className="pb-20 md:pb-0">
            <HeroSlider />
            <WhatsAppFeature />
            <WhyMedykos />
            <Services />
            <FeaturesTeaser />
            <Packages />
            <Portfolio />
            <DemoSection />
            <Process />
            <SpecializedServices />
            <FAQ />
            <ContactForm />
          </main>
          <Footer />
          <WhatsAppButton />
          <BottomNav />
        </>
      )}
    </div>
  );
};

export default Index;
