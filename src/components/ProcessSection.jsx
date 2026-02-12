// import { motion } from "framer-motion";

// const ProcessSection = () => {
//   return (
//     <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">

//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full h-full object-cover opacity-60 brightness-110 contrast-110"
//       >
//         {/* If video is directly inside public folder */}
//         <source src="/process.mp4" type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Green Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//       w-[800px] h-[800px] bg-green-500/15 blur-[200px] rounded-full" />

//       {/* Scientific Grid */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
//           `,
//           backgroundSize: "60px 60px",
//         }}
//       />

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="relative z-10 text-center max-w-3xl px-6"
//       >
//         {/* Small label */}
//         <p className="text-green-400 text-xs font-mono tracking-[0.3em] mb-4 uppercase">
//           Laboratory Protocol
//         </p>

//         {/* Title */}
//         <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
//           Precision Microscopic Analysis
//         </h2>

//         {/* Description */}
//         <p className="text-white/70 text-lg leading-relaxed">
//           High-speed imaging analyzes sperm motility, velocity, and cellular vitality.
//           Our laboratory systems convert biological movement into accurate performance
//           metrics — turning your lifestyle and health into measurable data.
//         </p>

//         {/* Data Indicators (Premium feel) */}
//         <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/50 font-mono">
//           <span>Motility Tracking</span>
//           <span>Velocity Analysis</span>
//           <span>Vitality Index</span>
//           <span>Lab Verified</span>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default ProcessSection;

import { motion } from "framer-motion";
import { ScanLine, Activity, Zap, Database } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20">
      
      {/* ================= BACKGROUND LAYERS ================= */}
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-50 grayscale contrast-125"
      >
        <source src="/process.mp4" type="video/mp4" />
      </video>

      {/* Heavy Vignette for focus */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/60 to-black" />

      {/* Sci-Fi Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* ================= MAIN CONTENT CARD ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-4xl px-4"
      >
        {/* Glass Container */}
        <div className="relative overflow-hidden bg-black/40 border border-white/10 backdrop-blur-md rounded-lg p-8 md:p-16 text-center">
          
          {/* --- DECORATIVE: SCANNING LINE ANIMATION --- */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/50 shadow-[0_0_20px_#22c55e] animate-scan opacity-50" />
          <style>{`
            @keyframes scan {
              0%, 100% { top: 0%; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
            .animate-scan { animation: scan 4s ease-in-out infinite; }
          `}</style>

          {/* --- DECORATIVE: CORNER BRACKETS --- */}
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/60 rounded-tl-lg" />
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/60 rounded-tr-lg" />
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/60 rounded-bl-lg" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/60 rounded-br-lg" />

          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6 border border-green-500/30 px-3 py-1 rounded-full bg-green-900/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-[10px] md:text-xs font-mono tracking-widest uppercase">
              Phase II: Lab Verification
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            Deep <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-700">
              Cellular Analytics
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            We don't just guess. We quantify. Our high-velocity imaging systems track 
            <span className="text-white font-medium"> speed, trajectory, and vitality </span> 
            to generate your official performance score.
          </p>

          {/* Metric Grid (New "Good UI" Element) */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8">
            <MetricItem icon={<ScanLine size={18} />} label="Motility" value="TRACKED" />
            <MetricItem icon={<Zap size={18} />} label="Velocity" value="ANALYZED" />
            <MetricItem icon={<Activity size={18} />} label="Vitality" value="INDEXED" />
            <MetricItem icon={<Database size={18} />} label="Data" value="SECURE" />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

// Sub-component for the stats at the bottom
const MetricItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center gap-2 group">
    <div className="text-green-500/50 group-hover:text-green-400 transition-colors">
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-1">{label}</span>
      <span className="text-xs md:text-sm font-bold text-white group-hover:text-green-400 transition-colors">{value}</span>
    </div>
  </div>
);

export default ProcessSection;