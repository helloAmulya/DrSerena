// import React, { useState } from "react";

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

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = "Name is required";
//     if (!form.phone) newErrors.phone = "Phone is required";
//     if (!form.email.includes("@")) newErrors.email = "Valid email required";
//     if (!form.message) newErrors.message = "Message is required";
//     if (!form.time) newErrors.time = "Please specify a preferred time";
//     if (!form.agree) newErrors.agree = "You must agree to be contacted";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length > 0) return setErrors(errs);
//     alert("Form submitted!");
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   return (
//     <section className="w-full px-6 py-20 md:px-20 bg-[#0F172A] text-white">
//       <div className="max-w-xl mx-auto space-y-6">
//         <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {[
//             { label: "Name", name: "name", type: "text" },
//             { label: "Phone", name: "phone", type: "text" },
//             { label: "Email", name: "email", type: "email" },
//             { label: "Preferred time to reach you", name: "time", type: "text" },
//           ].map((field) => (
//             <div key={field.name}>
//               <label className="block mb-1 text-sm font-medium">{field.label}</label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={form[field.name]}
//                 onChange={handleChange}
//                 className="w-full p-2 rounded-md bg-white/5 border border-white/20"
//               />
//               {errors[field.name] && (
//                 <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
//               )}
//             </div>
//           ))}

//           <div>
//             <label className="block mb-1 text-sm font-medium">What brings you here?</label>
//             <textarea
//               name="message"
//               rows={4}
//               value={form.message}
//               onChange={handleChange}
//               className="w-full p-2 rounded-md bg-white/5 border border-white/20"
//             />
//             {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               name="agree"
//               checked={form.agree}
//               onChange={handleChange}
//               className="accent-emerald-500"
//             />
//             <label htmlFor="agree" className="text-sm">I agree to be contacted</label>
//           </div>
//           {errors.agree && <p className="text-red-400 text-xs mt-1">{errors.agree}</p>}

//           <button
//             type="submit"
//             className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send,HeartPulse, BrainCircuit, Handshake, User } from "lucide-react";

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

  // Floating icons animation
  const floatingIcons = [
    { icon: <HeartPulse className="text-emerald-400/30" size={24} />, x: 10, y: 20 },
    { icon: <BrainCircuit className="text-purple-500/30" size={24} />, x: 85, y: 70 },
    { icon: <Handshake className="text-blue-400/30" size={24} />, x: 30, y: 80 },
  ];

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
    alert("Thank you! Dr. Blake will contact you soon.");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <section className="relative w-full px-6 py-20 md:px-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#5D3199] to-[#22E248]/10 z-0 opacity-90"></div>
      
      {/* Floating Icons Animation */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">
            Begin Your Healing Journey
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Contact Dr. Blake's office to schedule your free consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: "Full Name", name: "name", type: "text", icon: <User className="text-emerald-400" size={18} /> },
                { label: "Phone Number", name: "phone", type: "tel", icon: <Phone className="text-emerald-400" size={18} /> },
                { label: "Email Address", name: "email", type: "email", icon: <Mail className="text-emerald-400" size={18} /> },
                { label: "Preferred Availability", name: "time", type: "text", icon: <Clock className="text-emerald-400" size={18} /> },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-2 text-sm font-medium text-white/80">
                    {field.label}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  </div>
                  {errors[field.name] && (
                    <p className="text-red-300 text-xs mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="block mb-2 text-sm font-medium text-white/80">
                  What brings you to therapy?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="Briefly describe what you'd like to work on"
                />
                {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1 accent-emerald-500"
                />
                <label htmlFor="agree" className="text-sm text-white/80">
                  I agree to be contacted by Dr. Blake's office regarding my inquiry
                </label>
              </div>
              {errors.agree && <p className="text-red-300 text-xs mt-1">{errors.agree}</p>}

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-emerald-500/20">
                    <MapPin className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Office Location</h4>
                    <p className="text-white/80 text-sm">Maplewood Drive, Los Angeles, CA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-emerald-500/20">
                    <Phone className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-white/80 text-sm">(310) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-emerald-500/20">
                    <Mail className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-white/80 text-sm">contact@drserenablake.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-medium text-white mb-3">Office Hours</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekends</span>
                    <span>By appointment only</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-xl p-6 border border-emerald-400/20">
              <h4 className="font-semibold text-white mb-3">Free 15-Minute Consultation</h4>
              <p className="text-white/80 text-sm mb-4">
                Schedule a complimentary video call to discuss your needs and see if we're a good fit.
              </p>
              <button className="w-full px-4 py-2 rounded-lg bg-white text-emerald-600 font-medium hover:bg-gray-100 transition">
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;