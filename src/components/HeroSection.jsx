import React, { useState } from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {showImage && (
        <img
          src="/src/assets/scenryBg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover brightness-[0.9]"
        />
      )}

      {!showImage && (
        <div className="absolute inset-0 bg-black transition-all duration-500" />
      )}

      {/* Hero Content Box */}
      <motion.div
        className={`absolute inset-0 flex justify-center items-center px-4`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        <div
          className={`text-center max-w-3xl px-6 py-12 rounded-xl transition-all duration-500 ${
            showImage
              ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/20"
              : ""
          }`}
        >
          {/* <h1
            className={`text-4xl md:text-6xl font-bold tracking-tight leading-tight ${
              showImage ? "text-white/90 drop-shadow-md" : "text-white"
            }`}
          >
            Healing Starts with Trust.
          </h1> */}
          {/*  */}
          <h1
  className={`whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${
    showImage ? "text-white/90 drop-shadow-md" : "text-white"
  }`}
>
  Healing Starts with Trust
</h1>



          <p
            className={`mt-4 text-lg md:text-xl font-light ${
              showImage ? "text-white/80" : "text-white/70"
            }`}
          >
            Dr. Serena Blake, PsyD helps you build a healthier mind through
            compassionate, evidence-based therapy — in-person and virtual.
          </p>
          <button className="mt-6 px-6 py-3 text-sm  text-white font-semibold rounded-full backdrop-blur-xl border border-white/30 bg-white/10 hover:bg-white/20 transition duration-300">
            Book a Free Consult
          </button>
        </div>
      </motion.div>

      {/* Toggle Switch - right center */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-50">
        <button
          onClick={() => setShowImage(!showImage)}
          className={`w-8 h-8 rounded-full transition-all duration-300 border-2 ${
            showImage
              ? "bg-black border-purple-300 shadow-purple-500/40"
              : "bg-purple-500 border-white/20 shadow-inner"
          }`}
          title="Toggle Background"
        />
      </div>
    </div>
  );
}

export default HeroSection;
