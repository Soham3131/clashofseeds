
// import { Phone, Mail, MapPin, Activity, ShieldCheck, Microscope, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <footer className="relative bg-black text-white pt-24 pb-10 overflow-hidden border-t border-white/10">

//       {/* ===== Background Effects ===== */}
      
//       {/* Green glow at bottom */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

//       {/* Grid Texture */}
//       <div
//         className="absolute inset-0 opacity-5 pointer-events-none"
//         style={{
//           backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Scanning Line Animation on Top Border */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10">
//         <motion.div 
//           animate={{ x: ["-100%", "100%"] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//           className="w-1/2 h-full bg-gradient-to-r from-transparent via-green-500 to-transparent blur-[2px]"
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* ===== Main Grid (2 cols mobile, 4 cols desktop) ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">

//           {/* 1. BRAND & MISSION */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                 <Microscope size={18} className="text-black" />
//               </div>
//               <span className="text-xl font-bold tracking-tighter uppercase italic">
//                 Clash of <span className="text-green-500">Seeds</span>
//               </span>
//             </div>

//             <p className="text-gray-400 text-sm leading-relaxed">
//               The world's first cellular performance league. We combine advanced microscopy with lifestyle data to gamify male health optimization.
//             </p>

//             <div className="flex gap-4">
//               <SocialIcon icon={<Twitter size={18} />} />
//               <SocialIcon icon={<Github size={18} />} />
//               <SocialIcon icon={<Linkedin size={18} />} />
//             </div>
//           </div>

//           {/* 2. NAVIGATION (Mobile: 2 cols within this block) */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-widest text-green-500">Platform</h3>
//               <ul className="space-y-3 text-gray-400 text-sm">
//                 <FooterLink>How It Works</FooterLink>
//                 <FooterLink>Live Leaderboard</FooterLink>
//                 <FooterLink>Metrics Analysis</FooterLink>
//                 <FooterLink>Lab Partners</FooterLink>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-widest text-green-500">Legal</h3>
//               <ul className="space-y-3 text-gray-400 text-sm">
//                 <FooterLink>Privacy Protocol</FooterLink>
//                 <FooterLink>Terms of Service</FooterLink>
//                 <FooterLink>Research Data</FooterLink>
//                 <FooterLink>Support</FooterLink>
//               </ul>
//             </div>
//           </div>

//           {/* 3. CONTACT INFO */}
//           <div>
//             <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-widest text-green-500">Headquarters</h3>
//             <ul className="space-y-4 text-gray-400 text-sm">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="text-green-500 mt-0.5 shrink-0" />
//                 <span>Sector 29, Cyber Hub,<br />Gurgaon, India</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={16} className="text-green-500 shrink-0" />
//                 <span>+91 98765 43210</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={16} className="text-green-500 shrink-0" />
//                 <span>lab@clashofseeds.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* 4. NEWSLETTER / ACTION */}
//           <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
//             <h3 className="font-bold text-white mb-2">Join the Waitlist</h3>
//             <p className="text-xs text-gray-400 mb-4">
//               Get notified when the next race registration opens in your city.
//             </p>
            
//             <div className="relative">
//               <input 
//                 type="email" 
//                 placeholder="Enter email" 
//                 className="w-full bg-black/50 border border-white/20 rounded-lg py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
//               />
//               <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-green-500 rounded-md text-black hover:bg-green-400 transition-colors">
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* ===== Bottom Bar ===== */}
//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//             <span className="text-xs font-mono text-green-500 uppercase tracking-wider">
//               System Online • v2.4.0
//             </span>
//           </div>

//           <p className="text-xs text-gray-600">
//             © {new Date().getFullYear()} Clash of Seeds Inc. All rights reserved.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// // Helper Components for clean code
// const SocialIcon = ({ icon }) => (
//   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black hover:border-green-500 transition-all cursor-pointer">
//     {icon}
//   </div>
// );

// const FooterLink = ({ children }) => (
//   <li className="hover:text-green-400 hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2 group">
//     <span className="w-0 group-hover:w-2 h-[1px] bg-green-400 transition-all" />
//     {children}
//   </li>
// );

// export default Footer;

import { Phone, Mail, MapPin, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-20 md:pt-24 pb-10 overflow-hidden border-t border-white/10">

      {/* ===== Background Effects ===== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[300px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-green-500 to-transparent blur-[2px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ===== Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* ===== BRAND ===== */}
          <div className="space-y-6">

            {/* BIG LOGO */}
            <img
              src="/logo2.png"
              alt="Clash of Seeds"
              className="
                h-16 md:h-20 w-auto object-contain
                drop-shadow-[0_0_25px_rgba(34,197,94,0.6)]
              "
            />

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The world's first cellular performance league. Advanced microscopy,
              lifestyle analytics, and competitive health optimization.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* ===== LINKS ===== */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-6 uppercase text-xs tracking-widest text-green-500">
                Platform
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <FooterLink>How It Works</FooterLink>
                <FooterLink>Leaderboard</FooterLink>
                <FooterLink>Metrics</FooterLink>
                <FooterLink>Labs</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 uppercase text-xs tracking-widest text-green-500">
                Legal
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <FooterLink>Privacy</FooterLink>
                <FooterLink>Terms</FooterLink>
                <FooterLink>Research</FooterLink>
                <FooterLink>Support</FooterLink>
              </ul>
            </div>
          </div>

          {/* ===== CONTACT ===== */}
          <div>
            <h3 className="font-bold mb-6 uppercase text-xs tracking-widest text-green-500">
              Headquarters
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-500 mt-0.5" />
                <span>
                  Sector 29, Cyber Hub <br />
                  Gurgaon, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-500" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-500" />
                <span>lab@clashofseeds.com</span>
              </li>
            </ul>
          </div>

          {/* ===== NEWSLETTER ===== */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="font-bold text-white mb-2">Join the Waitlist</h3>
            <p className="text-xs text-gray-400 mb-4">
              Get notified when registrations open in your city.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-black/50 border border-white/20 rounded-lg py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-green-500"
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-green-500 rounded-md text-black hover:bg-green-400">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-green-500 uppercase">
              System Online
            </span>
          </div>

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Clash of Seeds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ===== Helpers ===== */

const SocialIcon = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-black hover:border-green-500 transition cursor-pointer">
    {icon}
  </div>
);

const FooterLink = ({ children }) => (
  <li className="hover:text-green-400 hover:translate-x-1 transition cursor-pointer flex items-center gap-2 group">
    <span className="w-0 group-hover:w-2 h-[1px] bg-green-400 transition-all" />
    {children}
  </li>
);

export default Footer;
