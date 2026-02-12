

// import React from "react";
// import { motion } from "framer-motion";
// import { Play, Microscope, Zap } from "lucide-react";

// const Hero = () => {
//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   // Staggered animation for text
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 },
//     },
//   };

//   // Slide up animation
//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   // Specific data requested
//   const raceStats = [
//     { label: "LAST RACE", value: "Gurgaon LAB" },
//     { label: "WINNER", value: "ARJUN (1M 05S)" },
//     { label: "TOP SPEED", value: "47 µM/S" },
//     { label: "STATUS", value: "RECORD BROKEN", highlight: true },
//   ];

//   return (
//     <section
//       id="hero"
//       className="relative w-full overflow-hidden bg-black h-[100dvh]" // h-[100dvh] fixes mobile browser bar issues
//     >
//       {/* ================= INJECTED STYLES FOR MARQUEE ================= */}
//       <style>
//         {`
//           @keyframes marquee {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             display: flex;
//             width: fit-content;
//             animation: marquee 20s linear infinite;
//           }
//         `}
//       </style>

//       {/* ================= BACKGROUND VIDEO ================= */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full h-full object-cover object-center opacity-60"
//       >
//         <source src="/hero1.mp4" type="video/mp4" />
//       </video>

//       {/* Dark overlay to make text pop */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* ================= REDUCED GREEN GLOW (Fixed Tint Issue) ================= */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//       w-[300px] md:w-[900px] h-[300px] md:h-[900px] 
//       bg-green-500/10 blur-[100px] md:blur-[260px] rounded-full pointer-events-none" />

//       {/* ================= SCIENCE GRID OVERLAY ================= */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* ================= TOP LEFT LIVE STATUS (Desktop Only) ================= */}
//       <div className="absolute top-6 left-6 z-20 hidden md:flex flex-col gap-1">
//         <div className="flex mt-10 items-center gap-2">
//           <span className="relative flex h-3 w-3">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//           </span>
//           <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
//             Live Lab Feed
//           </span>
//         </div>
//         <span className="text-[10px] text-white/40 font-mono">
//           GURGAON.LAT.28.45
//         </span>
//       </div>

//       {/* ================= MAIN HERO CONTENT ================= */}
//       <div className="relative z-10 h-full flex items-center justify-center px-4 pb-16">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="text-center max-w-6xl w-full"
//         >
//           {/* Badge */}
//           <motion.div variants={itemVariants} className="flex justify-center mb-6">
//             <div className="flex items-center gap-2 px-4 py-1.5 border border-green-500/30 bg-black/40 backdrop-blur-md rounded-full">
//               <Microscope size={14} className="text-green-400" />
//               <span className="text-[10px] md:text-xs font-mono text-green-300 uppercase tracking-wider">
//                 Cellular Performance League
//               </span>
//             </div>
//           </motion.div>

//           {/* HEADLINE - Responsive Sizes */}
//           <motion.h1
//             variants={itemVariants}
//             className="text-6xl md:text-[100px] lg:text-[130px] font-extrabold italic leading-[0.9] tracking-tighter"
//           >
//             <span className="text-white drop-shadow-lg">
//               CLASH OF
//             </span>
//             <br />
//             <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
//               SEEDS
//             </span>
//           </motion.h1>

//           {/* Subtext */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-6 text-sm md:text-xl text-gray-200 max-w-lg md:max-w-2xl mx-auto font-light leading-relaxed"
//           >
//             Optimize lifestyle. Improve sperm health. Measure real cellular
//             performance through advanced microscopic analysis.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center w-full"
//           >
//             <button
//               onClick={() => scrollToSection("join")}
//               className="w-full md:w-auto px-8 py-4 bg-green-500 text-black font-bold uppercase rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 transition"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <Zap size={18} fill="black" />
//                 Join Race
//               </div>
//             </button>

//             <button
//               onClick={() => scrollToSection("metrics")}
//               className="w-full md:w-auto px-8 py-4 border border-white/20 bg-black/30 backdrop-blur-sm text-white font-bold uppercase rounded-full hover:bg-white/10 transition"
//             >
//               <div className="flex items-center justify-center gap-2">
//                 <Play size={18} />
//                 Health Benefits
//               </div>
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* ================= MOVING TICKER (Marquee) ================= */}
//       <div className="absolute bottom-0 w-full bg-black/80 border-t border-white/10 backdrop-blur-md h-12 flex items-center overflow-hidden z-30">
//         <div className="animate-marquee">
//           {/* We repeat the content twice to ensure smooth looping */}
//           {[...Array(2)].map((_, arrayIndex) => (
//             <div key={arrayIndex} className="flex shrink-0">
//               {[...Array(4)].map((_, i) => ( // Repeat stats 4 times per set
//                 <div key={i} className="flex items-center gap-8 md:gap-16 mx-4">
//                   {raceStats.map((stat, idx) => (
//                     <span key={idx} className="text-[10px] md:text-xs font-mono uppercase text-gray-400 flex items-center gap-2">
//                       {idx === 0 && (
//                         <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></span>
//                       )}
//                       <span className={stat.highlight ? "text-green-400 font-bold" : "text-white"}>
//                         {stat.label}:
//                       </span>
//                       <span className={stat.highlight ? "text-green-400 font-bold" : "text-gray-300"}>
//                         {stat.value}
//                       </span>
//                     </span>
//                   ))}
//                 </div>
//               ))}
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

  // Staggered animation for text
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Slide up animation
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Specific data requested
  const raceStats = [
    { label: "LAST RACE", value: "Gurgaon LAB" },
    { label: "WINNER", value: "ARJUN (1M 05S)" },
    { label: "TOP SPEED", value: "47 µM/S" },
    { label: "STATUS", value: "RECORD BROKEN", highlight: true },
  ];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-black h-[100dvh]" // h-[100dvh] fixes mobile browser bar issues
    >
      {/* ================= INJECTED STYLES FOR MARQUEE ================= */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover object-center opacity-60"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to make text pop */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ================= REDUCED GREEN GLOW (Fixed Tint Issue) ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[300px] md:w-[900px] h-[300px] md:h-[900px] 
      bg-green-500/10 blur-[100px] md:blur-[260px] rounded-full pointer-events-none" />

      {/* ================= SCIENCE GRID OVERLAY ================= */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

       {/* ================= SPERM RACING TEXT DECORATION ================= */}
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/5 to-transparent opacity-20 uppercase tracking-widest whitespace-nowrap select-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
          SPERM RACING
        </span>
      </div>


      {/* ================= TOP LEFT LIVE STATUS (Desktop Only) ================= */}
      <div className="absolute top-6 left-6 z-20 hidden md:flex flex-col gap-1">
        <div className="flex mt-10 items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
            Live Lab Feed
          </span>
        </div>
        <span className="text-[10px] text-white/40 font-mono">
          GURGAON.LAT.28.45
        </span>
      </div>

      {/* ================= MAIN HERO CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center max-w-6xl w-full"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 border border-green-500/30 bg-black/40 backdrop-blur-md rounded-full">
              <Microscope size={14} className="text-green-400" />
              <span className="text-[10px] md:text-xs font-mono text-green-300 uppercase tracking-wider">
                Cellular Performance League
              </span>
            </div>
          </motion.div>

          {/* HEADLINE - Responsive Sizes */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-[100px] lg:text-[130px] font-extrabold italic leading-[0.9] tracking-tighter"
          >
            <span className="text-white drop-shadow-lg">
              CLASH OF
            </span>
            <br />
            <span className="bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-lg">
              SEEDS
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm md:text-xl text-gray-200 max-w-lg md:max-w-2xl mx-auto font-light leading-relaxed"
          >
            Optimize lifestyle. Improve sperm health. Measure real cellular
            performance through advanced microscopic analysis.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center w-full"
          >
            <button
              onClick={() => scrollToSection("join")}
              className="w-full md:w-auto px-8 py-4 bg-green-500 text-black font-bold uppercase rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 transition"
            >
              <div className="flex items-center justify-center gap-2">
                <Zap size={18} fill="black" />
                Join Race
              </div>
            </button>

            <button
              onClick={() => scrollToSection("metrics")}
              className="w-full md:w-auto px-8 py-4 border border-white/20 bg-black/30 backdrop-blur-sm text-white font-bold uppercase rounded-full hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-center gap-2">
                <Play size={18} />
                Health Benefits
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= MOVING TICKER (Marquee) ================= */}
      <div className="absolute bottom-0 w-full bg-black/80 border-t border-white/10 backdrop-blur-md h-12 flex items-center overflow-hidden z-30">
        <div className="animate-marquee">
          {/* We repeat the content twice to ensure smooth looping */}
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex shrink-0">
              {[...Array(4)].map((_, i) => ( // Repeat stats 4 times per set
                <div key={i} className="flex items-center gap-8 md:gap-16 mx-4">
                  {raceStats.map((stat, idx) => (
                    <span key={idx} className="text-[10px] md:text-xs font-mono uppercase text-gray-400 flex items-center gap-2">
                      {idx === 0 && (
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]"></span>
                      )}
                      <span className={stat.highlight ? "text-green-400 font-bold" : "text-white"}>
                        {stat.label}:
                      </span>
                      <span className={stat.highlight ? "text-green-400 font-bold" : "text-gray-300"}>
                        {stat.value}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;