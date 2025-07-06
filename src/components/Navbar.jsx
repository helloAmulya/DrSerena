// import React from "react";
// import { Activity } from "lucide-react";
// import { motion } from "framer-motion";

// function Navbar() {
//   return (
//     <motion.div
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed z-50 w-full backdrop-blur-md bg-[#966ED3]/40 border-b border-white/20 shadow-lg p-4 text-white flex justify-between items-center"
//     >
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.3, duration: 0.5 }}
//         className="flex items-center gap-2"
//       >
//         <Activity
//           size={44}
//           color="#22e248"
//           strokeWidth={1.25}
//           className="animate-pulse"
//         />
//         <h3 className="text-xl font-semibold cursor-pointer">Dr. Serena Blake</h3>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className="flex items-center gap-8"
//       >
//         <ul className="flex space-x-6 text-sm font-medium">
//           {["About", "Services", "FAQ"].map((item, idx) => (
//             <li key={idx} className="group inline-block cursor-pointer">
//               <span className="relative">
//                 {item}
//                 <div className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
//               </span>
//             </li>
//           ))}
//         </ul>

//         <button className="group relative overflow-hidden bg-gradient-to-r from-green-500/20 to-emerald-500/30 hover:from-green-500/30 hover:to-emerald-500/30 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-500 px-6 py-2 rounded-full border border-green-500/30 backdrop-blur-xl cursor-pointer">
//           Contact
//           <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Activity } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfScreenHeight = window.innerHeight / 2;
      const isScrolled = window.scrollY > halfScreenHeight;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed z-50 w-full backdrop-blur-md border-b shadow-lg p-4 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? " bg-[#0F172A]/30 border-white/15  text-white"
          : " bg-[#0F172A]/10 border-white/20 text-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <Activity
          size={44}
          color={scrolled  ? "#22e248" :  "#5D3199"}
          strokeWidth={1.25}
          className="animate-pulse"
        />
        <h3 className="text-xl font-semibold cursor-pointer">
          Dr. Serena Blake
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex items-center gap-8"
      >
        <ul className="flex space-x-6 text-md font-semibold">
          {["About", "Services", "FAQ"].map((item, idx) => (
            <li key={idx} className="group inline-block cursor-pointer">
              <span className="relative">
                {item}
                <div
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 ${
                    scrolled ? "bg-white " : " bg-white "
                  } transition-all duration-300 group-hover:w-full`}
                ></div>
              </span>
            </li>
          ))}
        </ul>

        <button className="group relative overflow-hidden bg-gradient-to-r from-green-600/60 to-emerald-600/60 hover:from-green-500/30 hover:to-emerald-500/30 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-500 px-6 py-2 rounded-full border border-green-500/30 backdrop-blur-xl cursor-pointer">
          Contact
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
