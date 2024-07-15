import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
      <LogoTicker />
      </div>
      <div id="projects" >
        <Features />
      </div>
      <div id="services" >
        <ProductShowcase />
      </div>
        <FAQs />
      <div id="contact">
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
