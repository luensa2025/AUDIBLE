import { useState } from "react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FlagshipService from "@/components/sections/FlagshipService";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Populations from "@/components/sections/Populations";
import Convenios from "@/components/sections/Convenios";
import AppointmentForm from "@/components/sections/AppointmentForm";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import LogoSelector from "@/components/sections/LogoSelector";
import logo1 from "@/assets/logo.png";

const Index = () => {
  const [selectedLogo, setSelectedLogo] = useState<string>(logo1);

  return (
    <main className="overflow-x-hidden">
      <Hero logo={selectedLogo} />
      <StatsBar />
      <LogoSelector onSelect={setSelectedLogo} selected={selectedLogo} />
      <ServicesGrid />
      <FlagshipService />
      <WhyUs />
      <Populations />
      <Convenios />
      <AppointmentForm />
      <CTASection />
      <Footer logo={selectedLogo} />
    </main>
  );
};

export default Index;
