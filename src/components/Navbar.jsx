import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* ===== Floating Container (NO background) ===== */}
      <div className="relative">

        {/* Subtle green light (floating effect) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[120px] bg-green-500/20 blur-[120px] pointer-events-none" />

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10">

          {/* ===== Logo ===== */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo("hero")}
          >
            <div className="relative">
              {/* glow */}
              <div className="absolute inset-0 bg-green-500/30 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition" />
              
              <img
                src="/logo.png"
                alt="Clash of Seeds"
                className="relative h-14 md:h-16 object-contain drop-shadow-[0_0_25px_rgba(34,197,94,0.7)]"
              />
            </div>

            <span className="hidden sm:block text-white font-semibold tracking-wider text-sm md:text-base">
              CLASH OF SEEDS
            </span>
          </div>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">

            {[
              { id: "process", label: "Process" },
              { id: "metrics", label: "Health" },
              { id: "leaderboard", label: "Leaderboard" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative group"
              >
                <span className="group-hover:text-green-400 transition">
                  {item.label}
                </span>

                {/* glowing underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* ===== CTA ===== */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("join")}
              className="relative px-6 py-2.5 rounded-full bg-green-500 text-black font-semibold text-sm overflow-hidden group shadow-[0_0_25px_rgba(34,197,94,0.6)]"
            >
              <span className="relative z-10">Join Race</span>

              {/* hover energy */}
              <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 blur-md transition" />
            </button>
          </div>

          {/* ===== Mobile Toggle ===== */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu (glass) ===== */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden backdrop-blur-xl bg-black/40 border-b border-white/10"
        >
          <div className="flex flex-col items-center gap-6 py-8 text-white text-base">

            <button onClick={() => scrollTo("process")} className="hover:text-green-400">
              Process
            </button>

            <button onClick={() => scrollTo("metrics")} className="hover:text-green-400">
              Health
            </button>

            <button onClick={() => scrollTo("leaderboard")} className="hover:text-green-400">
              Leaderboard
            </button>

            <button
              onClick={() => scrollTo("join")}
              className="mt-2 px-8 py-3 rounded-full bg-green-500 text-black font-semibold shadow-[0_0_25px_rgba(34,197,94,0.6)]"
            >
              Join Race
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
