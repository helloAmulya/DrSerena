import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "No, but a superbill is provided which you can submit to your insurance provider for reimbursement.",
  },
  {
    q: "Are online sessions available?",
    a: "Yes—all virtual sessions are securely conducted via Zoom.",
  },
  {
    q: "What is your cancellation policy?",
    a: "24-hour notice is required to avoid session charges.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (idx) => {
    setActive(idx === active ? null : idx);
  };

  return (
    <section className="w-full px-6 py-20 md:px-20 bg-gradient-to-bl from-[#121417] via-[#15191D] to-[#1A1D22] text-white"
    id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">FAQs</h2>

        <div className="divide-y divide-white/10">
          {faqs.map((item, idx) => {
            const isOpen = active === idx;

            return (
              <div key={idx} className="group">
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full py-5 flex items-center justify-between text-left ${
                    isOpen ? "border-l-4 border-emerald-700 pl-4" : "pl-6"
                  }`}
                >
                  <span className="relative text-sm md:text-base font-medium text-white group-hover:text-white/90 transition">
                    {item.q}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-600" />
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </motion.div>
                </button>

                {/* Animated Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pr-4 pb-6 text-white/70 text-sm leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
