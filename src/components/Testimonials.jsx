import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <section className="w-full px-6 py-20 md:px-20 bg-gradient-to-br from-[#121417] via-[#15191D] to-[#1A1D22] text-white">
      {/* Header */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block mb-3 px-4 py-1 text-xs font-medium rounded-full bg-white/10 text-white/70">
          Client Stories & Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          What Former Clients Say
        </h2>
        <p className="text-white/60 text-[15px] max-w-xl mx-auto mt-3">
          Real experiences from individuals who have found healing and growth
          through their work with Dr. Blake.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="p-6 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-sm transition hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-white/80 text-base leading-relaxed">
              “Working with Dr. Blake changed my life. Her care, empathy, and
              methods helped me find peace and move forward.”
            </p>
            <p className="mt-4 text-white/50 text-sm">– Anonymous</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
