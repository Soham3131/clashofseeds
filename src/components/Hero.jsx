

// import React from "react";
// import { motion } from "framer-motion";
// import { Play, Microscope, Zap } from "lucide-react";

// const Hero = () => {
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8 },
//     },
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black">

//       {/* VIDEO */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full h-full object-cover opacity-80 brightness-110 contrast-110"
//       >
//         <source src="/hero1.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//       w-[900px] h-[900px] bg-green-500/20 blur-[250px] rounded-full" />

//       {/* Grid */}
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

//       {/* TOP LEFT STATUS */}
//       <div className="absolute top-8 left-8 z-20 hidden md:flex flex-col gap-1">
//         <div className="flex items-center gap-2">
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//           </span>
//           <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
//             Live Lab Feed
//           </span>
//         </div>
//         <span className="text-[10px] text-white/40 font-mono">
//           LAB.NET.ACTIVE
//         </span>
//       </div>

//       {/* TOP RIGHT NAV */}
//       <div className="absolute top-8 right-8 z-20 flex gap-6 text-xs font-bold tracking-widest text-white uppercase">
//         <span className="cursor-pointer hover:text-green-400">Process</span>
//         <span className="cursor-pointer hover:text-green-400">Health</span>
//         <span
//           onClick={() => scrollToSection("join")}
//           className="cursor-pointer border border-white/20 px-4 py-1 rounded-full hover:border-green-400 hover:text-green-400"
//         >
//           Join
//         </span>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 h-full flex items-center justify-center px-4">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="text-center max-w-6xl"
//         >
//           {/* Badge */}
//           <motion.div variants={itemVariants} className="flex justify-center mb-6">
//             <div className="flex items-center gap-2 px-4 py-1.5 border border-green-500/30 bg-green-500/10 rounded-full backdrop-blur-md">
//               <Microscope size={14} className="text-green-400" />
//               <span className="text-xs font-mono text-green-300 uppercase tracking-wider">
//                 Cellular Performance League
//               </span>
//             </div>
//           </motion.div>

//           {/* BIG SPORTS HEADLINE */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-[70px] md:text-[120px] lg:text-[140px] font-extrabold italic leading-[0.9] tracking-tight"
//           >
//             <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
//               CLASH OF
//             </span>
//             <br />
//             <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
//               SEEDS
//             </span>
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
//           >
//             Optimize lifestyle. Improve sperm health.  
//             Measure real cellular performance through advanced microscopic analysis.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-10 flex flex-col md:flex-row gap-6 justify-center"
//           >
//             <button
//               onClick={() => scrollToSection("join")}
//               className="px-10 py-4 bg-green-500 text-black font-bold uppercase rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:scale-105 transition"
//             >
//               <div className="flex items-center gap-2">
//                 <Zap size={18} />
//                 Join Race
//               </div>
//             </button>

//             <button
//               onClick={() => scrollToSection("process")}
//               className="px-10 py-4 border border-white/20 text-white font-bold uppercase rounded-full hover:border-green-500 hover:text-green-400 transition"
//             >
//               <div className="flex items-center gap-2">
//                 <Play size={18} />
//                 How It Works
//               </div>
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* SPORTS TICKER (WITH ONE INDIAN CITY) */}
//       <div className="absolute bottom-0 w-full bg-black/90 border-t border-white/10 backdrop-blur-md h-10 flex items-center overflow-hidden">
//         <div className="flex whitespace-nowrap animate-marquee text-xs font-mono uppercase text-gray-400">
//           {[...Array(5)].map((_, i) => (
//             <div key={i} className="flex items-center gap-12 mx-8">
//               <span className="flex items-center gap-2 text-white">
//                 <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
//                 LAST RACE: Gurgaon LAB
//               </span>
//               <span>WINNER: ARJUN (1M 05S)</span>
//               <span>TOP SPEED: 47 µM/S</span>
//               <span className="text-green-400">RECORD BROKEN</span>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { Play, Microscope, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black"

    >
      {/* ================= VIDEO ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-80 brightness-110 contrast-110"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ================= CINEMATIC GLOW ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[900px] h-[900px] bg-green-500/20 blur-[260px] rounded-full" />

      {/* ================= SCIENCE GRID ================= */}
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

      {/* ================= FLOATING PARTICLES (SPERM-LIKE MOTION) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: Math.random() * 800, x: Math.random() * 1200, opacity: 0 }}
            animate={{
              y: [null, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1.5 h-6 bg-white/30 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* ================= TOP LEFT STATUS ================= */}
      <div className="absolute top-28 left-8 z-20 hidden md:flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
            Live Lab Feed
          </span>
        </div>
        <span className="text-[10px] text-white/40 font-mono">
          LAB.NET.ACTIVE
        </span>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center max-w-6xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 border border-green-500/30 bg-green-500/10 rounded-full backdrop-blur-md">
              <Microscope size={14} className="text-green-400" />
              <span className="text-xs font-mono text-green-300 uppercase tracking-wider">
                Cellular Performance League
              </span>
            </div>
          </motion.div>

          {/* BIG SPORTS HEADLINE */}
          <motion.h1
            variants={itemVariants}
            className="text-[64px] md:text-[110px] lg:text-[140px] font-extrabold italic leading-[0.9] tracking-tight"
          >
            <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              CLASH OF
            </span>
            <br />
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              SEEDS
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Optimize lifestyle. Improve sperm health. Measure real cellular
            performance through advanced microscopic analysis.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col md:flex-row gap-6 justify-center"
          >
            <button
              onClick={() => scrollToSection("join")}
              className="px-10 py-4 bg-green-500 text-black font-bold uppercase rounded-full shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:scale-105 transition"
            >
              <div className="flex items-center gap-2">
                <Zap size={18} />
                Join Race
              </div>
            </button>

            <button
              onClick={() => scrollToSection("metrics")}
              className="px-10 py-4 border border-white/20 text-white font-bold uppercase rounded-full hover:border-green-500 hover:text-green-400 transition"
            >
              <div className="flex items-center gap-2">
                <Play size={18} />
                Health Benefits
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SPORTS TICKER ================= */}
      <div className="absolute bottom-0 w-full bg-black/90 border-t border-white/10 backdrop-blur-md h-10 flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-xs font-mono uppercase text-gray-400">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-8">
              <span className="flex items-center gap-2 text-white">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                LAST RACE: Gurgaon LAB
              </span>
              <span>WINNER: ARJUN (1M 05S)</span>
              <span>TOP SPEED: 47 µM/S</span>
              <span className="text-green-400">RECORD BROKEN</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
