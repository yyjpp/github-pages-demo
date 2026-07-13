import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { ProductHighlights } from "./components/ProductHighlights";
import { Capabilities } from "./components/Capabilities";
import { StatsSection } from "./components/StatsSection";
import { Solutions } from "./components/Solutions";
import { Comparison } from "./components/Comparison";
import { Clients } from "./components/Clients";
import { AboutUs } from "./components/AboutUs";
import { CtaSection } from "./components/CtaSection";
import { DemoForm } from "./components/DemoForm";
import { Footer } from "./components/Footer";
import { useMagneticSectionScroll } from "./hooks/useMagneticSectionScroll";

export default function App() {
  const [contactTitle, setContactTitle] = useState<string | null>(null);
  useMagneticSectionScroll();

  const scrollToSection = (selector: string) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector(selector)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const openContact = (title: "预约产品演示" | "联系合作") => {
    setContactTitle(title);
    window.setTimeout(() => {
      scrollToSection("#demo-form");
    }, 0);
  };

  const closeContact = () => {
    setContactTitle(null);
    window.setTimeout(() => {
      scrollToSection("#contact-cta");
    }, 0);
  };

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      <Navigation onRequestDemo={() => openContact("预约产品演示")} />
      <main>
        <Hero onRequestDemo={() => openContact("预约产品演示")} />
        <PainPoints />
        <ProductHighlights />
        <Capabilities />
        <StatsSection />
        <Solutions />
        <Comparison />
        <Clients />
        <AboutUs />
        <CtaSection onOpenContact={openContact} />
        {contactTitle && <DemoForm title={contactTitle} onClose={closeContact} />}
      </main>
      <Footer onRequestDemo={() => openContact("预约产品演示")} />
    </div>
  );
}
