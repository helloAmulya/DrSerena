

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Send,
  User,
  CalendarDays, 
  CheckSquare,
}
from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.message) newErrors.message = "Message is required";
    if (!form.time) newErrors.time = "Please specify availability";
    if (!form.agree) newErrors.agree = "You must agree to be contacted";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    // In a real application, you would send this data to a backend.
    // For this example, we'll just show an alert.
    alert("Thank you! Dr. Blake will contact you soon.");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // Clear error when input changes
  };

  return (
    <section className="relative w-full px-4 py-16 md:px-12 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    id="contact">
      {/* Subtle background shapes (similar to image) - adjusted for dark background */}
      <div className="absolute top-10 left-10 text-gray-700 opacity-50">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="absolute top-20 right-10 text-gray-700 opacity-50">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="22"></line>
        </svg>
      </div>
      <div className="absolute bottom-10 left-20 text-gray-700 opacity-50">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 text-gray-700 opacity-50">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      </div>


      <div className="relative z-20 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Book an Appointment
          </h2>
          <p className="text-gray-300 text-base mt-2">
            Send a quick message and Dr. Blake will be in touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Full Name", name: "name", type: "text", icon: <User size={18} className="text-gray-400" /> },
              { label: "Phone", name: "phone", type: "tel", icon: <Phone size={18} className="text-gray-400" /> },
              { label: "Email", name: "email", type: "email", icon: <Mail size={18} className="text-gray-400" /> },
              { label: "Availability", name: "time", type: "text", icon: <CalendarDays size={18} className="text-gray-400" /> },
            ].map((field) => (
              <div key={field.name}>
                <label className="sr-only">{field.label}</label> {/* Screen reader only label */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    {field.icon}
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm shadow-sm"
                    placeholder={field.label}
                  />
                </div>
                {errors[field.name] && (
                  <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                )}
              </div>
            ))}

            <div>
              <label className="sr-only">Message</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm shadow-sm"
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agree" // Add id for label association
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="agree" className="text-sm text-gray-300 select-none">
                I agree to be contacted
              </label>
            </div>
            {errors.agree && <p className="text-red-400 text-xs mt-1">{errors.agree}</p>}

            <motion.button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-base hover:bg-blue-700 transition-colors shadow-md"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Phone,
//   Clock,
//   Send,
//   HeartPulse,
//   BrainCircuit,
//   Handshake,
//   User,
// } from "lucide-react";

// function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//     time: "",
//     agree: false,
//   });
//   const [errors, setErrors] = useState({});

//   const floatingIcons = [
//     { icon: <HeartPulse className="text-emerald-400/30" size={20} />, x: 10, y: 20 },
//     { icon: <BrainCircuit className="text-purple-500/30" size={20} />, x: 85, y: 70 },
//     { icon: <Handshake className="text-blue-400/30" size={20} />, x: 30, y: 80 },
//   ];

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = "Name is required";
//     if (!form.phone) newErrors.phone = "Phone is required";
//     if (!form.email.includes("@")) newErrors.email = "Valid email required";
//     if (!form.message) newErrors.message = "Message is required";
//     if (!form.time) newErrors.time = "Please specify availability";
//     if (!form.agree) newErrors.agree = "You must agree to be contacted";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length > 0) return setErrors(errs);
//     alert("Thank you! Dr. Blake will contact you soon.");
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   return (
//     <section className="relative w-full px-4 py-16 md:px-12 overflow-hidden bg-[#0F172A]">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#4C3D8C]/70 to-[#22E248]/10 z-0 blur-sm opacity-80"></div>

//       {/* Floating Icons */}
//       {floatingIcons.map((item, index) => (
//         <motion.div
//           key={index}
//           className="absolute z-10 blur-sm"
//           style={{ left: `${item.x}%`, top: `${item.y}%` }}
//           animate={{ y: [0, -12, 0], opacity: [0.2, 0.4, 0.2] }}
//           transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
//         >
//           {item.icon}
//         </motion.div>
//       ))}

//       <div className="relative z-20 max-w-xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-10"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
//             Book an Appointment
//           </h2>
//           <p className="text-white/70 text-base mt-2">
//             Send a quick message and Dr. Blake will be in touch.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 ring-1 ring-white/10 shadow-lg"
//         >
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {[
//               { label: "Full Name", name: "name", type: "text", icon: <User size={16} className="text-emerald-400" /> },
//               { label: "Phone", name: "phone", type: "tel", icon: <Phone size={16} className="text-emerald-400" /> },
//               { label: "Email", name: "email", type: "email", icon: <Mail size={16} className="text-emerald-400" /> },
//               { label: "Availability", name: "time", type: "text", icon: <Clock size={16} className="text-emerald-400" /> },
//             ].map((field) => (
//               <div key={field.name}>
//                 <label className="block mb-1 text-sm text-white/80">{field.label}</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
//                     {field.icon}
//                   </div>
//                   <input
//                     type={field.type}
//                     name={field.name}
//                     value={form[field.name]}
//                     onChange={handleChange}
//                     className="w-full pl-8 pr-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
//                     placeholder={field.label}
//                   />
//                 </div>
//                 {errors[field.name] && (
//                   <p className="text-red-300 text-xs mt-1">{errors[field.name]}</p>
//                 )}
//               </div>
//             ))}

//             <div>
//               <label className="block mb-1 text-sm text-white/80">Message</label>
//               <textarea
//                 name="message"
//                 rows={3}
//                 value={form.message}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
//                 placeholder="Your message..."
//               />
//               {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
//             </div>

//             <div className="flex items-start gap-2">
//               <input
//                 type="checkbox"
//                 name="agree"
//                 checked={form.agree}
//                 onChange={handleChange}
//                 className="mt-1 accent-emerald-500"
//               />
//               <label htmlFor="agree" className="text-sm text-white/80">
//                 I agree to be contacted
//               </label>
//             </div>
//             {errors.agree && <p className="text-red-300 text-xs mt-1">{errors.agree}</p>}

//             <motion.button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all shadow"
//               whileHover={{ scale: 1.01 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <Send size={16} />
//               Send Message
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



