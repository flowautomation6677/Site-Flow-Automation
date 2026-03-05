import BootSequence from "@/components/BootSequence";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-flow-dark relative font-gilroy text-flow-text selection:bg-flow-wine selection:text-white">
      {/* Boot Animation Cover */}
      <BootSequence />

      {/* Main Page Content */}
      <Header />
      <Hero />
      <Methodology />
      <Portfolio />
      <TechStack />
      <Footer />
    </main>
  );
}
