import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/10 bg-gradient-to-bl from-[#121417] via-[#15191D] to-[#1A1D22] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="space-y-4"
        >
          <h3 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
            Dr. Serena Blake, PsyD
          </h3>
          <p className="text-base text-white/60">Licensed Clinical Psychologist</p>
          <div className="flex items-start gap-2 text-base text-white/70 hover:text-white transition">
            <MapPin size={18} className="text-[#5BA1C8] mt-0.5" />
            <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <div className="flex items-start gap-2 text-base text-white/70 hover:text-white transition">
            <Phone size={18} className="text-[#5BA1C8] mt-0.5" />
            <span>(323) 555-0192</span>
          </div>
          <div className="flex items-start gap-2 text-base text-white/70 hover:text-white transition">
            <Mail size={18} className="text-[#5BA1C8] mt-0.5" />
            <a
              href="mailto:serena@blakepsychology.com"
              className="hover:underline"
            >
              serena@blakepsychology.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
