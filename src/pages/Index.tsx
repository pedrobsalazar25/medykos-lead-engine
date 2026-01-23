import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-20 md:pb-0">
        <HeroSlider />
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
    </div>
  );
};

export default Index;
