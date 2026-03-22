import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CalculatorSection from "@/components/CalculatorSection";
import { useCalculatorLock } from "@/context/CalculatorLockContext";

const Index = () => {
  const { isUnlocked } = useCalculatorLock();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      {isUnlocked && <CalculatorSection />}
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;