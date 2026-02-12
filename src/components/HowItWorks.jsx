// import SectionWrapper from "./SectionWrapper";
// import { motion } from "framer-motion";
// import { FaUserCheck, FaFlask, FaMicroscope, FaChartLine } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaUserCheck />,
//     title: "Register",
//     desc: "Create your athlete profile.",
//   },
//   {
//     icon: <FaFlask />,
//     title: "Collection",
//     desc: "Submit sample at secure labs.",
//   },
//   {
//     icon: <FaMicroscope />,
//     title: "Analysis",
//     desc: "Adv. imaging tracks motility.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Ranking",
//     desc: "Compete on the leaderboard.",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // This creates the "one by one" effect
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100 },
//   },
// };

// const HowItWorks = () => {
//   return (
//     <section id="process" className="relative py-20 bg-black overflow-hidden">
      
//       {/* Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//       w-[600px] h-[600px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

//       <SectionWrapper>
//         {/* Header */}
//         <div className="text-center mb-12 relative z-10">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase italic tracking-tighter">
//             Race <span className="text-green-500">Protocol</span>
//           </h2>
//           <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
//             Four steps to enter the league. From lifestyle optimization to microscopic verification.
//           </p>
//         </div>

//         {/* The Grid: 2 Columns on Mobile (grid-cols-2), 4 on Desktop (lg:grid-cols-4) */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 relative z-10"
//         >
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               variants={itemVariants}
//               className="group relative flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300"
//             >
//               {/* Step Number Watermark (Background) */}
//               <span className="absolute top-2 right-4 text-4xl font-black text-white/5 group-hover:text-green-500/10 transition-colors">
//                 0{i + 1}
//               </span>

//               {/* Icon */}
//               <div className="mb-4 p-3 md:p-4 rounded-full bg-black/50 border border-green-500/30 text-green-400 text-xl md:text-2xl shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform duration-300">
//                 {step.icon}
//               </div>

//               {/* Content */}
//               <h3 className="text-sm md:text-lg font-bold text-white mb-2 uppercase tracking-wide">
//                 {step.title}
//               </h3>
//               <p className="text-xs md:text-sm text-gray-400 leading-snug">
//                 {step.desc}
//               </p>
              
//               {/* Connecting Line (Visual Detail) */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//             </motion.div>
//           ))}
//         </motion.div>
//       </SectionWrapper>
//     </section>
//   );
// };

// export default HowItWorks;

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FaUserCheck, FaFlask, FaMicroscope, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserCheck />,
    title: "Register",
    desc: "Create profile.",
  },
  {
    icon: <FaFlask />,
    title: "Collection",
    desc: "Submit sample.",
  },
  {
    icon: <FaMicroscope />,
    title: "Analysis",
    desc: "Lab tracks data.",
  },
  {
    icon: <FaChartLine />,
    title: "Ranking",
    desc: "Join leaderboard.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slowed down stagger for clear "1 by 1" effect
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const HowItWorks = () => {
  return (
    <section id="process" className="relative py-24 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase italic tracking-tighter"
          >
            Race <span className="text-green-500">Protocol</span>
          </motion.h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base">
            Complete these 4 stages to enter the official league rankings.
          </p>
        </div>

        {/* CONNECTING LINE ANIMATION (Behind the cards) */}
        <div className="absolute left-0 right-0 top-[45%] hidden md:block h-[2px] bg-white/10 w-full max-w-5xl mx-auto z-0">
           <motion.div 
             initial={{ width: "0%" }}
             whileInView={{ width: "100%" }}
             transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
             className="h-full bg-green-500 shadow-[0_0_20px_#22c55e]"
           />
        </div>

        {/* GRID CONTAINER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // FORCE 2 COLUMNS ON MOBILE (grid-cols-2)
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10 max-w-6xl mx-auto"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative flex flex-col items-center text-center 
              p-5 rounded-2xl bg-white/5 border border-white/10 
              hover:border-green-500 hover:bg-white/10 transition-all duration-300
              min-w-0" // min-w-0 prevents flex items from overflowing
            >
              
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black border border-green-500/30 flex items-center justify-center text-xs font-mono text-green-500">
                0{i + 1}
              </div>

              {/* Icon Container */}
              <div className="mb-4 p-4 rounded-full bg-black/80 border border-green-500/20 text-green-400 text-2xl shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-300 relative z-10">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-sm md:text-lg font-bold text-white mb-1 uppercase tracking-wider">
                {step.title}
              </h3>
              <p className="text-[10px] md:text-sm text-gray-400 leading-tight">
                {step.desc}
              </p>

              {/* Mobile "Flow" Line (Small line at bottom of card) */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + (i * 0.2) }}
                className="absolute bottom-0 left-4 right-4 h-[1px] bg-green-500/50 md:hidden origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default HowItWorks;