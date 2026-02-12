import { motion } from "framer-motion";

const ProcessSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-60 brightness-110 contrast-110"
      >
        {/* If video is directly inside public folder */}
        <source src="/process.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Green Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[800px] h-[800px] bg-green-500/15 blur-[200px] rounded-full" />

      {/* Scientific Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        {/* Small label */}
        <p className="text-green-400 text-xs font-mono tracking-[0.3em] mb-4 uppercase">
          Laboratory Protocol
        </p>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          Precision Microscopic Analysis
        </h2>

        {/* Description */}
        <p className="text-white/70 text-lg leading-relaxed">
          High-speed imaging analyzes sperm motility, velocity, and cellular vitality.
          Our laboratory systems convert biological movement into accurate performance
          metrics — turning your lifestyle and health into measurable data.
        </p>

        {/* Data Indicators (Premium feel) */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-white/50 font-mono">
          <span>Motility Tracking</span>
          <span>Velocity Analysis</span>
          <span>Vitality Index</span>
          <span>Lab Verified</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcessSection;
