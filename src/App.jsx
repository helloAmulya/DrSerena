import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#191D21] min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <About />
      <Services />

      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
