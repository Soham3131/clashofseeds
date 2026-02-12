import { Phone, Mail, MapPin, Activity, ShieldCheck, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-24 pb-10 overflow-hidden">

      {/* ===== Background Effects ===== */}

      {/* Green radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[900px] h-[900px] bg-green-500/10 blur-[220px] rounded-full" />

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

      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== Main Grid ===== */}
        <div className="grid md:grid-cols-4 gap-14 mb-16">

          {/* ===== Brand Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Bigger Logo */}
            <img
              src="/logo2.png"
              alt="Clash of Seeds"
              className="h-28 md:h-32 w-auto mb-6 object-contain drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]"

            />

            <p className="text-white/60 text-sm leading-relaxed">
              Clash of Seeds is a cellular performance platform measuring sperm health
              through advanced laboratory analysis, motility tracking, and lifestyle insights.
              Optimize sleep, reduce stress, and improve real biological performance.
            </p>
          </motion.div>

          {/* ===== Benefits ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-6 text-lg">Why Participate</h3>

            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition">
                <Activity size={18} className="text-green-400" />
                Measure real biological performance
              </li>

              <li className="flex items-center gap-3 hover:text-white transition">
                <Microscope size={18} className="text-green-400" />
                Lab-verified microscopic analysis
              </li>

              <li className="flex items-center gap-3 hover:text-white transition">
                <ShieldCheck size={18} className="text-green-400" />
                Private & secure testing
              </li>
            </ul>
          </motion.div>

          {/* ===== Quick Links ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>

            <ul className="space-y-3 text-white/60 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">How It Works</li>
              <li className="hover:text-green-400 cursor-pointer transition">Metrics</li>
              <li className="hover:text-green-400 cursor-pointer transition">Leaderboard</li>
              <li className="hover:text-green-400 cursor-pointer transition">Join Race</li>
            </ul>
          </motion.div>

          {/* ===== Contact ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-semibold mb-6 text-lg">Contact</h3>

            <div className="space-y-4 text-white/60 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-400 mt-1" />
                <span>Sector 29, Gurgaon, Haryana, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-400" />
                <span>support@clashofseeds.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-3">

          <span>
            © {new Date().getFullYear()} Clash of Seeds. All rights reserved.
          </span>

          <div className="flex gap-6">
            <span className="hover:text-green-400 cursor-pointer">Privacy</span>
            <span className="hover:text-green-400 cursor-pointer">Terms</span>
            <span className="hover:text-green-400 cursor-pointer">Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
