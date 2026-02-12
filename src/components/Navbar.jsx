// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const scrollTo = (id) => {
//     setOpen(false);
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 w-full z-50"
//     >
//       {/* ===== Floating Container (NO background) ===== */}
//       <div className="relative">

//         {/* Subtle green light (floating effect) */}
//         <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[120px] bg-green-500/20 blur-[120px] pointer-events-none" />

//         {/* Content */}
//         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-10">

//           {/* ===== Logo ===== */}
//           <div
//             className="flex items-center gap-3 cursor-pointer group"
//             onClick={() => scrollTo("hero")}
//           >
//             <div className="relative">
//               {/* glow */}
//               <div className="absolute inset-0 bg-green-500/30 blur-[25px] rounded-full opacity-0 group-hover:opacity-100 transition" />
              
//               <img
//                 src="/logo.png"
//                 alt="Clash of Seeds"
//                 className="relative h-14 md:h-16 object-contain drop-shadow-[0_0_25px_rgba(34,197,94,0.7)]"
//               />
//             </div>

//             <span className="hidden sm:block text-white font-semibold tracking-wider text-sm md:text-base">
//               CLASH OF SEEDS
//             </span>
//           </div>

//           {/* ===== Desktop Menu ===== */}
//           <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/80">

//             {[
//               { id: "process", label: "Process" },
//               { id: "metrics", label: "Health" },
//               { id: "leaderboard", label: "Leaderboard" },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollTo(item.id)}
//                 className="relative group"
//               >
//                 <span className="group-hover:text-green-400 transition">
//                   {item.label}
//                 </span>

//                 {/* glowing underline */}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all group-hover:w-full" />
//               </button>
//             ))}
//           </div>

//           {/* ===== CTA ===== */}
//           <div className="hidden md:block">
//             <button
//               onClick={() => scrollTo("join")}
//               className="relative px-6 py-2.5 rounded-full bg-green-500 text-black font-semibold text-sm overflow-hidden group shadow-[0_0_25px_rgba(34,197,94,0.6)]"
//             >
//               <span className="relative z-10">Join Race</span>

//               {/* hover energy */}
//               <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-100 blur-md transition" />
//             </button>
//           </div>

//           {/* ===== Mobile Toggle ===== */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* ===== Mobile Menu (glass) ===== */}
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden backdrop-blur-xl bg-black/40 border-b border-white/10"
//         >
//           <div className="flex flex-col items-center gap-6 py-8 text-white text-base">

//             <button onClick={() => scrollTo("process")} className="hover:text-green-400">
//               Process
//             </button>

//             <button onClick={() => scrollTo("metrics")} className="hover:text-green-400">
//               Health
//             </button>

//             <button onClick={() => scrollTo("leaderboard")} className="hover:text-green-400">
//               Leaderboard
//             </button>

//             <button
//               onClick={() => scrollTo("join")}
//               className="mt-2 px-8 py-3 rounded-full bg-green-500 text-black font-semibold shadow-[0_0_25px_rgba(34,197,94,0.6)]"
//             >
//               Join Race
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* ===== LOGO (Clean - No Green Box) ===== */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo("hero")}
        >
          <img
            src="/logo.png"
            alt="Clash of Seeds"
            className="
              h-10 md:h-12 w-auto object-contain
              drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]
              group-hover:scale-105 transition
            "
          />

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white font-bold tracking-wider text-sm md:text-base">
              CLASH OF <span className="text-green-500">SEEDS</span>
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
              Performance League
            </span>
          </div>
        </div>

        {/* ===== Desktop Menu ===== */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { id: "process", label: "Protocol" },
            { id: "metrics", label: "Health" },
            { id: "leaderboard", label: "Rankings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-5 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ===== CTA Desktop ===== */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("join")}
            className="group relative px-6 py-2.5 bg-green-500 text-black font-bold text-xs uppercase tracking-widest rounded-lg hover:scale-105 transition"
          >
            <span className="flex items-center gap-2">
              Join Race <ChevronRight size={14} />
            </span>

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          </button>
        </div>

        {/* ===== Mobile Toggle ===== */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-3">
              {[
                { id: "process", label: "Protocol" },
                { id: "metrics", label: "Health" },
                { id: "leaderboard", label: "Rankings" },
              ].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                  <span className="text-lg font-semibold text-white">
                    {item.label}
                  </span>
                </motion.button>
              ))}

              <button
                onClick={() => scrollTo("join")}
                className="mt-6 w-full py-4 bg-green-500 text-black font-bold uppercase rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95 transition"
              >
                Start Registration
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
