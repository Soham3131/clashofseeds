

// import { motion } from "framer-motion";
// import { useState } from "react";

// const JoinRace = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);

//     // Fake success reset after 3 sec
//     setTimeout(() => {
//       setSubmitted(false);
//       e.target.reset();
//     }, 3000);
//   };

//   return (
//     <section id="join" className="py-32 relative bg-black overflow-hidden">

//       {/* Glow */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
//       w-[700px] h-[700px] bg-green-500/15 blur-[200px] rounded-full" />

//       {/* Grid background */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative z-10 max-w-3xl mx-auto px-6"
//       >
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <p className="text-green-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">
//             Registration
//           </p>

//           <h2 className="text-5xl font-bold text-white mb-4">
//             Join the Next Race
//           </h2>

//           <p className="text-white/60 text-lg max-w-xl mx-auto">
//             Register for laboratory testing and get your cellular performance
//             analyzed in the upcoming Clash of Seeds event.
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
//         >
//           {/* Name */}
//           <div>
//             <label className="text-white/60 text-sm">Full Name</label>
//             <input
//               type="text"
//               required
//               placeholder="Enter your name"
//               className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
//             />
//           </div>

//           {/* Age + City */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="text-white/60 text-sm">Age</label>
//               <input
//                 type="number"
//                 required
//                 placeholder="Age"
//                 className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="text-white/60 text-sm">City</label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Your city"
//                 className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
//               />
//             </div>
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="text-white/60 text-sm">Phone Number</label>
//             <input
//               type="tel"
//               required
//               placeholder="+91 XXXXX XXXXX"
//               className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
//             />
//           </div>

//           {/* Lifestyle quick info */}
//           <div>
//             <label className="text-white/60 text-sm">Average Sleep (hours)</label>
//             <select
//               className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
//             >
//               <option>Less than 5</option>
//               <option>5 – 6</option>
//               <option>6 – 7</option>
//               <option>7 – 8</option>
//               <option>8+</option>
//             </select>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full mt-4 py-4 bg-green-500 text-black font-bold rounded-full shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-[1.02] transition"
//           >
//             Register for Testing
//           </button>

//           {/* Fake success message */}
//           {submitted && (
//             <p className="text-center text-green-400 text-sm mt-4">
//               Registration received. Our team will contact you shortly.
//             </p>
//           )}
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default JoinRace;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { User, MapPin, Phone, Moon, Activity, ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const JoinRace = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form logic would go here
    }, 2000);
  };

  return (
    <section id="join" className="relative py-24 bg-black overflow-hidden min-h-screen flex items-center">

      {/* ===== Background Ambience ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <SectionWrapper>
        <div className="relative max-w-2xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div 
               initial={{ opacity: 0, y: -10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md"
            >
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-green-400 text-[10px] md:text-xs font-mono tracking-widest uppercase">
                 Registration Open • Season 4
               </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
            >
              Enter The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Lab</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm md:text-lg max-w-md mx-auto"
            >
              Secure your spot for microscopic analysis. Data is encrypted and anonymous.
            </motion.p>
          </div>

          {/* ===== THE FORM CARD ===== */}
          <div className="relative group">
            {/* Glowing Border Gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative bg-black border border-white/10 rounded-2xl p-6 md:p-10 overflow-hidden">
              
              {/* Tech Scan Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-green-500/80 uppercase tracking-wider ml-1">Identity</label>
                      <div className="relative group/input">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors" size={18} />
                        <input
                          type="text"
                          required
                          placeholder="Full Name / Alias"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row: Age & City */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Age</label>
                        <div className="relative group/input">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors" size={18} />
                          <input
                            type="number"
                            required
                            placeholder="25"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Base</label>
                        <div className="relative group/input">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors" size={18} />
                          <input
                            type="text"
                            required
                            placeholder="City"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Contact</label>
                      <div className="relative group/input">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors" size={18} />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>

                    {/* Sleep Select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-500 uppercase tracking-wider ml-1">Avg. Sleep</label>
                      <div className="relative group/input">
                        <Moon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-green-400 transition-colors" size={18} />
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-10 text-white focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                          <option className="bg-black">Less than 5 hours</option>
                          <option className="bg-black">5 – 6 hours</option>
                          <option className="bg-black">6 – 7 hours</option>
                          <option className="bg-black">7 – 8 hours</option>
                          <option className="bg-black">8+ hours (Optimal)</option>
                        </select>
                        {/* Custom Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-500" />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-6 py-4 bg-green-500 hover:bg-green-400 text-black font-bold uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Activity className="animate-spin" />
                      ) : (
                        <>
                          Initiate Protocol <ChevronRight size={18} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-gray-600 mt-4">
                      By registering, you agree to the <span className="underline cursor-pointer hover:text-white">Research Manifesto</span>.
                    </p>
                  </motion.form>
                ) : (
                  // ===== SUCCESS STATE =====
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/50">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Access Granted
                    </h3>
                    <p className="text-gray-400 max-w-xs mx-auto mb-8">
                      Your profile has been created. A confirmation link has been sent to your device.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-green-500 hover:text-white transition underline"
                    >
                      Register another candidate
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </SectionWrapper>
    </section>
  );
};

export default JoinRace;