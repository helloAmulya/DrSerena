import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / rect.height) * -15;
    const rotateY = (mouseX / rect.width) * 15;

    setMousePosition({ x: rotateY, y: rotateX });
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="w-full px-6 py-20 md:px-20 bg-[#0F172A] text-white"
            id="about"
>
      <motion.div
        className="flex flex-col md:flex-row gap-12 items-center justify-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left: 3D image */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            transition: "transform 0.2s ease-out",
            willChange: "transform",
            contain: "layout paint",
          }}
          className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-2xl bg-white/5 shadow-2xl  transition-all duration-500"
        >
          {/* low on hover */}
          <div
            className="absolute inset-0 z-0 pointer-events-none rounded-3xl"
            style={{
              background: `radial-gradient(180px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0,123,255,0.12), transparent)`,
              transition: "background 0.15s ease-out",
            }}
          />
          <img
            src="/src/assets/dmain.jpg"
            alt="Dr. Serena Blake"
            className="w-full h-full object-cover object-top rounded-3xl z-10"
          />
        </div>

        {/* Right: Detail text */}
        <div className="max-w-xl text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">
            Dr. Serena Blake, PsyD
          </h2>
          <p className="text-white/80 text-sm">Clinical Psychologist</p>

          <p className="text-white/90 text-[15px] leading-relaxed">
            Based in Los Angeles, CA, Dr. Serena Blake is a licensed clinical
            psychologist with over 8 years of experience and more than 500
            successful sessions.
          </p>
          <p className="text-white/80 text-[15px] leading-relaxed">
            She integrates evidence-based practices like cognitive-behavioral
            therapy and mindfulness with personalized care to help you manage
            anxiety, improve relationships, and heal from trauma.
          </p>
          <p className="text-white/70 text-[15px] leading-relaxed">
            Whether meeting in person at her Maplewood Drive office or virtually
            via Zoom, she’s committed to providing a safe, supportive, and
            growth-oriented space.
          </p>

          <div className="pt-6 text-sm text-white/80 space-y-1 flex flex-col border-t border-white/10">
            <p>
              <strong>📍 Location:</strong>{" "}
              <span className="text-white/60 hover:text-white transition">
                1287 Maplewood Drive, Los Angeles, CA 90026
              </span>
            </p>
            <p>
              <strong>📞 Phone:</strong>{" "}
              <span className="text-white/60 hover:text-white transition">
                (323) 555-0192
              </span>
            </p>
            <p>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:serena@blakepsychology.com"
                className="underline text-white/60 hover:text-white transition"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial or quote */}
      <motion.div
        className="mt-16 text-center max-w-2xl mx-auto text-white/70 italic text-[15px] border-t border-white/10 pt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        “Therapy with Dr. Blake helped me rediscover myself after years of
        anxiety. Her warmth, insight, and presence changed everything for me.”
      </motion.div>
    </section>
  );
}

export default About;
