

// import SectionWrapper from "./SectionWrapper";
// import { motion } from "framer-motion";
// import { Activity, Zap, BarChart3, HeartPulse, Brain } from "lucide-react";

// const metrics = [
//   {
//     icon: <Zap size={22} />,
//     title: "Motility Speed",
//     desc: "Measures how efficiently sperm move forward — the key indicator of performance.",
//   },
//   {
//     icon: <BarChart3 size={22} />,
//     title: "Cell Count",
//     desc: "Total active sperm concentration analyzed under laboratory conditions.",
//   },
//   {
//     icon: <Activity size={22} />,
//     title: "Morphology",
//     desc: "Evaluates structure and shape to determine cellular quality.",
//   },
//   {
//     icon: <HeartPulse size={22} />,
//     title: "Vitality",
//     desc: "Tracks live cell percentage and overall biological health.",
//   },
//   {
//     icon: <Brain size={22} />,
//     title: "Lifestyle Impact",
//     desc: "Sleep, stress, fitness, and habits translated into performance metrics.",
//   },
// ];

// const Metrics = () => {
//   return (
//     <section id="metrics" className="relative py-32 bg-black overflow-hidden">

//       {/* Glow Background */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//       w-[900px] h-[900px] bg-green-500/10 blur-[200px] rounded-full" />

//       {/* Scientific Grid */}
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

//       <SectionWrapper>
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <p className="text-green-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">
//             Performance Data
//           </p>

//           <h2 className="text-5xl font-bold text-white mb-4">
//             Health Performance Metrics
//           </h2>

//           <p className="text-white/60 max-w-2xl mx-auto text-lg">
//             Advanced laboratory analysis converts biological activity into
//             measurable performance data — giving you a clear view of your
//             cellular health.
//           </p>
//         </div>

//         {/* Metrics Grid */}
//         <div className="grid md:grid-cols-5 gap-8">
//           {metrics.map((metric, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="p-8 text-center rounded-2xl 
//               bg-white/5 backdrop-blur-xl border border-white/10
//               hover:border-green-400/40 transition shadow-[0_0_30px_rgba(34,197,94,0.08)]"
//             >
//               {/* Icon */}
//               <div className="flex justify-center mb-4 text-green-400">
//                 {metric.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {metric.title}
//               </h3>

//               {/* Description */}
//               <p className="text-white/60 text-sm leading-relaxed">
//                 {metric.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </SectionWrapper>
//     </section>
//   );
// };

// export default Metrics;

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Activity, Zap, BarChart3, HeartPulse, Brain } from "lucide-react";

const metrics = [
  {
  icon: <Brain size={22} />,
  title: "Stress Control",
  desc: "High stress reduces motility and vitality. Track how relaxation and recovery improve cellular performance.",
}
,
  {
    icon: <Zap size={22} />,
    title: "Faster Motility",
    desc: "Improve forward movement speed through better sleep, nutrition, and stress control.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Higher Cell Count",
    desc: "Track how lifestyle changes impact sperm concentration and reproductive strength.",
  },
  {
  icon: <Activity size={22} />,
  title: "Cortisol Balance",
  desc: "Chronic stress increases cortisol, reducing sperm quality and motility. Lifestyle optimization helps restore hormonal balance.",
},
{
  icon: <Brain size={22} />,
  title: "Sleep Optimization",
  desc: "Deep sleep improves testosterone levels and cellular recovery, directly enhancing reproductive performance.",
}
,
  {
    icon: <Activity size={22} />,
    title: "Better Morphology",
    desc: "Enhance cellular structure and quality for stronger biological performance."
  },
  {
  icon: <Zap size={22} />,
  title: "Hormonal Health",
  desc: "Healthy testosterone levels support sperm production, energy, and overall biological performance.",
}
,
{
  icon: <HeartPulse size={22} />,
  title: "Cellular Recovery",
  desc: "Proper nutrition, exercise, and recovery improve cell regeneration and long-term reproductive health.",
}
,
  {
    icon: <HeartPulse size={22} />,
    title: "Improved Vitality",
    desc: "Increase live cell percentage and overall reproductive health indicators.",
  },
  {
    icon: <Brain size={22} />,
    title: "Lifestyle Optimization",
    desc: "See how sleep, fitness, stress, and habits directly affect your cellular performance.",
  },
];

const Metrics = () => {
  return (
    <section id="metrics" className="relative py-32 bg-black overflow-hidden">

      {/* ===== Background Glow ===== */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[900px] h-[900px] bg-green-500/10 blur-[220px] rounded-full"
      />

      {/* ===== Scientific Grid ===== */}
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

      <SectionWrapper>
        {/* ===== Section Heading ===== */}
        <div className="text-center mb-20">

          <p className="text-green-400 text-xs font-mono tracking-[0.35em] uppercase mb-3">
            Health Benefits
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Upgrade Your Biological Performance
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Your daily habits directly impact sperm health. Improve sleep, reduce stress,
            optimize fitness, and track real improvements in motility, vitality, and
            cellular quality through advanced laboratory analysis.
          </p>
        </div>

        {/* ===== Benefits Grid ===== */}
        <div className="grid md:grid-cols-5 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-8 text-center rounded-2xl
              bg-white/5 backdrop-blur-xl border border-white/10
              hover:border-green-400/40 transition
              shadow-[0_0_30px_rgba(34,197,94,0.08)] group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 rounded-2xl transition" />

              {/* Icon */}
              <div className="flex justify-center mb-5 text-green-400">
                {metric.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {metric.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== Bottom Highlight (conversion copy) ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/40 text-sm font-mono tracking-widest uppercase">
            Measured. Verified. Improved.
          </p>
        </motion.div>
      </SectionWrapper>
    </section>
  );
};

export default Metrics;
