

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Users } from "lucide-react";

import anxietyStressImg from "../assets/anxiety-stress.jpg";
import traumaRecoveryImg from "../assets/trauma-recovery.jpeg";
import sceneryBg from "../assets/scenryBg.jpg";

const services = [
  {
    image: anxietyStressImg,
    title: "Anxiety & Stress Management",
    desc: "Supportive sessions to help you manage panic, overthinking, burnout, and chronic stress through practical tools and mindfulness.",
  },
  {
    title: "Relationship Counseling",
    desc: "For couples and individuals navigating communication issues, trust, emotional disconnection, or transitions in relationships.",
  },
  {
    image: traumaRecoveryImg,
    title: "Trauma Recovery",
    desc: "Safe, evidence-based care to help process trauma, PTSD, or difficult past experiences in a compassionate and structured setting.",
  },
];

const fees = [
  {
    icon: <DollarSign size={24} className="text-white" />,
    label: "Individual Session",
    amount: "$200 / session",
  },
  {
    icon: <Users size={24} className="text-white" />,
    label: "Couples Session",
    amount: "$240 / session",
  },
];

function Services() {
  return (
    <section className="relative w-full px-6 py-20 md:px-20 text-white overflow-hidden"
    id="services">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={sceneryBg}
          alt="Mountain scenery background"
          className="w-full h-full object-cover brightness-[0.8]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Services & Specialties</h2>
          <p className="text-white/70 text-base md:text-[15px] max-w-xl mx-auto">
            Professional support for emotional health, healing, and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {service.image && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Session Fees */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">Session Fees</h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {fees.map((fee, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-xl bg-[#0F172A]/90 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                  {fee.icon}
                </div>
                <div className="text-left">
                  <p className="text-base font-medium text-white">{fee.label}</p>
                  <p className="text-lg font-semibold text-white">{fee.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
