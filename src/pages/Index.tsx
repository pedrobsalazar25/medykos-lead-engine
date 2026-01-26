import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WhatsAppFeature from "@/components/WhatsAppFeature";
import WhyMedykos from "@/components/WhyMedykos";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import SpecializedServices from "@/components/SpecializedServices";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/components/SplashScreen";

const SPLASH_SHOWN_KEY = "medikos_splash_shown";

const Index = () => {
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash on first visit (per session)
    if (typeof window !== "undefined") {
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
            <Packages />
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
