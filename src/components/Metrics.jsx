

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Zap, Brain, Moon, Dna, ShieldCheck, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: <Zap size={24} />,
    title: "Motility Speed",
    val: "+200%",
    desc: "Forward velocity optimization.",
    color: "text-yellow-400",
    border: "group-hover:border-yellow-500/50",
    bg: "group-hover:bg-yellow-500/10",
  },
  {
    icon: <Brain size={24} />,
    title: "Stress Shield",
    val: "-40%",
    desc: "Cortisol reduction tracking.",
    color: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/10",
  },
  {
    icon: <Moon size={24} />,
    title: "Sleep Recovery",
    val: "8.5h",
    desc: "Testosterone production boost.",
    color: "text-indigo-400",
    border: "group-hover:border-indigo-500/50",
    bg: "group-hover:bg-indigo-500/10",
  },
  {
    icon: <Dna size={24} />,
    title: "Morphology",
    val: "A-Grade",
    desc: "Cellular structure analysis.",
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Hormonal Balance",
    val: "Optimal",
    desc: "Endocrine system health.",
    color: "text-orange-400",
    border: "group-hover:border-orange-500/50",
    bg: "group-hover:bg-orange-500/10",
  },
];

const Metrics = () => {
  return (
    <section id="metrics" className="relative py-24 bg-black overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16 px-4">
           <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-green-400 text-[10px] md:text-xs font-mono tracking-widest uppercase">
               Live System Analysis
             </span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
             Biological <span className="text-green-500">Dashboard</span>
           </h2>
        </div>

        {/* ================= ZONE 1: THE CARDS ================= */}
        {/* Mobile: Grid of 2 columns. We show first 4 items.
            Desktop: Grid of 5 columns. We show all 5 items.
         */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 max-w-7xl mx-auto px-2 md:px-0 mb-6">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              /* Logic: On Mobile (block), hide the 5th item (hidden). On Desktop (md:block), show it. */
              className={`
                group relative p-4 flex flex-col justify-between h-40 md:h-48 rounded-2xl 
                bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300
                ${i === 4 ? "hidden md:flex" : "flex"} 
                ${item.border}
              `}
            >
              {/* Hover BG */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.bg}`} />

              {/* Icon & Value */}
              <div className="relative z-10 flex justify-between items-start">
                <div className={`p-2 rounded-lg bg-black/50 ${item.color}`}>
                  {item.icon}
                </div>
                <span className={`text-xs md:text-sm font-mono font-bold ${item.color}`}>
                  {item.val}
                </span>
              </div>
              
              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-sm md:text-lg font-bold text-white leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-400 leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= ZONE 2: THE BIG CHART ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto rounded-3xl border border-green-500/20 bg-gradient-to-b from-green-900/10 to-black overflow-hidden flex flex-col md:flex-row h-auto md:h-80"
        >
          {/* Left Side: Description */}
          <div className="md:w-1/3 p-6 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black/40 backdrop-blur-md z-10">
             <div className="flex items-center gap-2 mb-4 text-green-400">
               <TrendingUp size={20} />
               <span className="text-xs font-bold tracking-wider uppercase">Performance Trend</span>
             </div>
             
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
               Overall Vitality
             </h3>
             
             <p className="text-sm text-gray-400 leading-relaxed mb-6">
               Your aggregate score measures the combined efficiency of sleep, stress, and cellular data. 
               <span className="text-white block mt-3 font-mono text-xs md:text-sm bg-green-500/20 border border-green-500/30 px-3 py-2 rounded-lg w-fit">
                 Current Trajectory: <span className="text-green-400 font-bold">Positive (+15%)</span>
               </span>
             </p>

             <button className="hidden md:block w-fit px-6 py-2 rounded-full border border-white/20 text-xs font-bold text-white uppercase hover:bg-white/10 transition">
               View Full Report
             </button>
          </div>

          {/* Right Side: The Chart Visualization */}
          <div className="md:w-2/3 relative h-64 md:h-full w-full">
             
             {/* Grid Lines */}
             <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 40px' }} />

             {/* The Chart SVG */}
             <div className="absolute inset-0 flex items-end">
                <svg className="w-full h-3/4 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated Area */}
                  <motion.path 
                    initial={{ d: "M0 50 L0 50 L100 50 L100 50 Z" }}
                    whileInView={{ d: "M0 50 L0 35 C 20 40, 30 20, 50 25 S 70 5, 100 10 L 100 50 Z" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    fill="url(#chartFill)" 
                  />
                  
                  {/* Animated Line */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M0 35 C 20 40, 30 20, 50 25 S 70 5, 100 10"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke" // Keeps line crisp
                  />

                  {/* Floating Data Points */}
                  {[20, 50, 80].map((x, i) => (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={i === 0 ? 36 : i === 1 ? 25 : 8}
                      r="2"
                      fill="#22c55e"
                      stroke="black"
                      strokeWidth="0.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 1 + (i * 0.2) }}
                    />
                  ))}
                </svg>
             </div>
          </div>
        </motion.div>

      </SectionWrapper>
    </section>
  );
};

export default Metrics;