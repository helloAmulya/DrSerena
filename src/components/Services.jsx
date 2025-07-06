import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Handshake, BrainCircuit, DollarSign, Users } from "lucide-react";

const services = [
  {
    icon: <HeartPulse size={28} className="text-emerald-400" />,
    title: "Anxiety & Stress Management",
    desc: "Helping you regulate emotions and develop coping strategies for anxiety, panic, and stress-related disorders.",
    bg: "/src/assets/blue-water.webp",
  },
  {
    icon: <Handshake size={28} className="text-emerald-400" />,
    title: "Relationship Counseling",
    desc: "For couples and individuals seeking to improve communication, rebuild trust, and navigate emotional challenges.",
    bg: "/src/assets/abstract-pastel.avif",
  },
  {
    icon: <BrainCircuit size={28} className="text-emerald-400" />,
    title: "Trauma Recovery",
    desc: "Providing evidence-based care for trauma, PTSD, and emotional recovery in a safe and supportive setting.",
    bg: "/src/assets/soft-gradient.webp",
  },
];

const fees = [
  {
    icon: <DollarSign size={24} className="text-green-300" />,
    label: "Individual Session",
    amount: "$200 / session",
  },
  {
    icon: <Users size={24} className="text-green-300" />,
    label: "Couples Session",
    amount: "$240 / session",
  },
];

function Services() {
  return (
    <section className="w-full px-6 py-20 md:px-20 bg-[#131d35] text-white">
      {/* Heading */}
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Services & Specialties</h2>
        <p className="text-white/70 text-[15px] max-w-xl mx-auto">
          Compassionate, evidence-based care for emotional wellness and healing.
        </p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="relative p-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-emerald-500/30 group overflow-hidden"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Blurred Background on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"
              style={{
                backgroundImage: `url(${service.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(10px)",
              }}
            />
            <div className="absolute inset-0 rounded-full bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
              {service.icon}
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Session Fees Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Session Fees</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {fees.map((fee, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:shadow-green-500/20 transition"
            >
              {fee.icon}
              <div className="text-left">
                <p className="text-sm font-medium">{fee.label}</p>
                <p className="text-white/60 text-sm">{fee.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Services;




