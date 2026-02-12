// import { motion } from "framer-motion";

// const JoinRace = () => {
//   return (
//     <section id="join" className="py-32 relative bg-black text-center overflow-hidden">

//       {/* Glow */}
//       <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[160px] rounded-full" />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         className="relative z-10 max-w-2xl mx-auto px-6"
//       >
//         <h2 className="text-5xl font-bold mb-6">
//           Ready to Compete?
//         </h2>

//         <p className="text-white/70 mb-10">
//           Improve your sleep, reduce stress, optimize your lifestyle —  
//           then prove your performance scientifically.
//         </p>

//         <button className="px-10 py-4 text-lg bg-green-500 text-black font-semibold rounded-full shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-105 transition">
//           Join the Next Race
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default JoinRace;

import { motion } from "framer-motion";
import { useState } from "react";

const JoinRace = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Fake success reset after 3 sec
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="join" className="py-32 relative bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[700px] h-[700px] bg-green-500/15 blur-[200px] rounded-full" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">
            Registration
          </p>

          <h2 className="text-5xl font-bold text-white mb-4">
            Join the Next Race
          </h2>

          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Register for laboratory testing and get your cellular performance
            analyzed in the upcoming Clash of Seeds event.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="text-white/60 text-sm">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
            />
          </div>

          {/* Age + City */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-white/60 text-sm">Age</label>
              <input
                type="number"
                required
                placeholder="Age"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
              />
            </div>

            <div>
              <label className="text-white/60 text-sm">City</label>
              <input
                type="text"
                required
                placeholder="Your city"
                className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-white/60 text-sm">Phone Number</label>
            <input
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
            />
          </div>

          {/* Lifestyle quick info */}
          <div>
            <label className="text-white/60 text-sm">Average Sleep (hours)</label>
            <select
              className="w-full mt-2 px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-green-400 outline-none"
            >
              <option>Less than 5</option>
              <option>5 – 6</option>
              <option>6 – 7</option>
              <option>7 – 8</option>
              <option>8+</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 py-4 bg-green-500 text-black font-bold rounded-full shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:scale-[1.02] transition"
          >
            Register for Testing
          </button>

          {/* Fake success message */}
          {submitted && (
            <p className="text-center text-green-400 text-sm mt-4">
              Registration received. Our team will contact you shortly.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default JoinRace;
