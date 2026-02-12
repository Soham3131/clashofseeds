

// import SectionWrapper from "./SectionWrapper";
// import { motion } from "framer-motion";
// import clsx from "clsx";

// const data = [
//   { name: "Arjun Mehta", city: "Gurgaon", score: 99, speed: "48 µm/s", vitality: "96%" },
//   { name: "Rohit Sharma", city: "Delhi", score: 97, speed: "46 µm/s", vitality: "94%" },
//   { name: "Karthik Reddy", city: "Hyderabad", score: 96, speed: "45 µm/s", vitality: "93%" },
//   { name: "Aditya Singh", city: "Bangalore", score: 94, speed: "44 µm/s", vitality: "91%" },
//   { name: "Vikram Patel", city: "Ahmedabad", score: 93, speed: "43 µm/s", vitality: "90%" },
//   { name: "Rahul Nair", city: "Kochi", score: 92, speed: "42 µm/s", vitality: "89%" },
//   { name: "Sandeep Kumar", city: "Chennai", score: 90, speed: "41 µm/s", vitality: "87%" },
//   { name: "Manish Verma", city: "Pune", score: 89, speed: "40 µm/s", vitality: "86%" },
// ];

// const Leaderboard = () => {
//   return (
//     <section id="leaderboard" className="relative py-32 bg-black overflow-hidden">

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
//             National Rankings
//           </p>

//           <h2 className="text-5xl font-bold text-white mb-4">
//             Performance Leaderboard
//           </h2>

//           <p className="text-white/60 max-w-2xl mx-auto text-lg">
//             Top participants ranked based on laboratory analysis of motility,
//             speed, and cellular vitality across India.
//           </p>
//         </div>

//         {/* Table */}
//         <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

//           {/* Header */}
//           <div className="grid grid-cols-5 px-6 py-4 text-xs uppercase text-white/40 font-mono border-b border-white/10">
//             <span>Rank</span>
//             <span>Name</span>
//             <span>City</span>
//             <span>Speed</span>
//             <span className="text-right">Score</span>
//           </div>

//           {data.map((user, i) => {
//             const isTop3 = i < 3;

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 viewport={{ once: true }}
//                 className={clsx(
//                   "grid grid-cols-5 items-center px-6 py-4 border-b border-white/10 text-sm",
//                   "hover:bg-white/5 transition",
//                   isTop3 && "bg-green-500/5"
//                 )}
//               >
//                 {/* Rank */}
//                 <div
//                   className={clsx(
//                     "w-8 h-8 flex items-center justify-center rounded-full font-bold",
//                     i === 0 && "bg-yellow-400 text-black",
//                     i === 1 && "bg-gray-300 text-black",
//                     i === 2 && "bg-amber-700 text-white",
//                     i > 2 && "bg-white/10 text-white"
//                   )}
//                 >
//                   {i + 1}
//                 </div>

//                 {/* Name */}
//                 <div className="font-semibold text-white">
//                   {user.name}
//                 </div>

//                 {/* City */}
//                 <div className="text-white/60">
//                   {user.city}
//                 </div>

//                 {/* Speed */}
//                 <div className="text-green-400 font-mono">
//                   {user.speed}
//                 </div>

//                 {/* Score */}
//                 <div className="text-right font-bold text-white">
//                   {user.score}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Footer note */}
//         <p className="text-center text-white/50 mt-8 text-sm">
//           Data based on certified laboratory testing. Rankings updated monthly.
//         </p>
//       </SectionWrapper>
//     </section>
//   );
// };

// export default Leaderboard;
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Trophy, Medal, MapPin, Activity, Search, Filter } from "lucide-react";
import clsx from "clsx";

const data = [
  { name: "Arjun Mehta", city: "Gurgaon", score: 99, speed: "48 µm/s", vitality: "96%", change: "+2" },
  { name: "Rohit Sharma", city: "Delhi", score: 97, speed: "46 µm/s", vitality: "94%", change: "0" },
  { name: "Karthik Reddy", city: "Hyderabad", score: 96, speed: "45 µm/s", vitality: "93%", change: "+1" },
  { name: "Aditya Singh", city: "Bangalore", score: 94, speed: "44 µm/s", vitality: "91%", change: "-1" },
  { name: "Vikram Patel", city: "Ahmedabad", score: 93, speed: "43 µm/s", vitality: "90%", change: "+3" },
  { name: "Rahul Nair", city: "Kochi", score: 92, speed: "42 µm/s", vitality: "89%", change: "0" },
  { name: "Sandeep Kumar", city: "Chennai", score: 90, speed: "41 µm/s", vitality: "87%", change: "-2" },
  { name: "Manish Verma", city: "Pune", score: 89, speed: "40 µm/s", vitality: "86%", change: "+1" },
];

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="relative py-24 bg-black overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black" />
      
      {/* Tech Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <SectionWrapper>
        {/* ===== HEADER ===== */}
        <div className="relative z-10 text-center mb-16 px-4">
          <motion.div 
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10"
          >
             <Trophy size={14} className="text-yellow-400" />
             <span className="text-green-400 text-[10px] md:text-xs font-mono tracking-widest uppercase">
               National Rankings • Season 2026
             </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase italic tracking-tighter">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Leaderboard</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            Top performers ranked by motility, velocity, and cellular vitality.
          </p>
        </div>

        {/* ===== CONTROLS BAR (Search & Filter) ===== */}
        <div className="relative z-10 max-w-5xl mx-auto mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
           {/* Search Input */}
           <div className="relative w-full md:w-auto group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-green-500 transition-colors">
               <Search size={18} />
             </div>
             <input 
               type="text" 
               placeholder="Search athlete..." 
               className="w-full md:w-64 bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-green-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
             />
           </div>

           {/* Filter Button */}
           <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-gray-300 hover:bg-white/10 hover:text-white transition">
             <Filter size={14} />
             FILTER: ALL REGIONS
           </button>
        </div>

        {/* ===== LEADERBOARD CONTAINER ===== */}
        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* DESKTOP HEADER ROW (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-12 px-6 py-3 text-[10px] uppercase font-bold tracking-widest text-gray-500 border-b border-white/10">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-4">Athlete</div>
            <div className="col-span-3">Location</div>
            <div className="col-span-2 text-center">Velocity</div>
            <div className="col-span-2 text-right">Score</div>
          </div>

          {/* LIST ITEMS */}
          <div className="flex flex-col gap-3 md:gap-0">
            {data.map((user, i) => {
              const isTop3 = i < 3;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={clsx(
                    "group relative overflow-hidden rounded-xl md:rounded-none border md:border-x-0 md:border-t-0 border-white/10 md:border-b",
                    "bg-white/5 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none", // Card style on mobile
                    "hover:bg-white/5 transition-colors duration-300"
                  )}
                >
                  {/* Glowing Edge for Top 3 */}
                  {isTop3 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 md:hidden" />}

                  {/* === CONTENT GRID === */}
                  <div className="grid grid-cols-2 md:grid-cols-12 items-center p-4 md:px-6 md:py-4 gap-4 md:gap-0">
                    
                    {/* 1. RANK */}
                    <div className="col-span-2 md:col-span-1 flex md:justify-center items-center gap-3 md:gap-0">
                       <div className={clsx(
                         "w-8 h-8 md:w-6 md:h-6 flex items-center justify-center rounded-full text-xs font-bold",
                         i === 0 ? "bg-yellow-500 text-black shadow-[0_0_15px_#eab308]" : 
                         i === 1 ? "bg-gray-300 text-black shadow-[0_0_15px_#d1d5db]" : 
                         i === 2 ? "bg-amber-700 text-white shadow-[0_0_15px_#b45309]" : 
                         "bg-white/10 text-gray-400"
                       )}>
                         {i < 3 ? <Medal size={14} /> : i + 1}
                       </div>
                       {/* Mobile Label */}
                       <span className="md:hidden text-xs text-gray-500 font-mono">RANKING</span>
                    </div>

                    {/* 2. NAME */}
                    <div className="col-span-2 md:col-span-4 flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
                         {user.name.charAt(0)}
                       </div>
                       <div>
                         <div className="font-bold text-white text-sm md:text-base group-hover:text-green-400 transition-colors">
                           {user.name}
                         </div>
                         <div className="text-[10px] text-gray-500 md:hidden flex items-center gap-1">
                           <Activity size={10} /> {user.vitality} Vitality
                         </div>
                       </div>
                    </div>

                    {/* 3. CITY (Hidden label on mobile, shown as value) */}
                    <div className="col-span-1 md:col-span-3 flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                       <MapPin size={12} className="text-green-500/50" />
                       {user.city}, IN
                    </div>

                    {/* 4. SPEED */}
                    <div className="col-span-1 md:col-span-2 flex flex-col md:items-center items-end">
                       <span className="text-green-400 font-mono font-bold text-sm">{user.speed}</span>
                       <span className="text-[10px] text-gray-600 md:hidden">VELOCITY</span>
                    </div>

                    {/* 5. SCORE */}
                    <div className="col-span-2 md:col-span-2 flex items-center justify-between md:justify-end gap-2 border-t md:border-t-0 border-white/10 pt-3 md:pt-0 mt-2 md:mt-0">
                       <span className="md:hidden text-xs font-bold text-gray-500">TOTAL SCORE</span>
                       <div className="flex items-center gap-2">
                         <span className={clsx(
                           "text-xs font-mono",
                           user.change.includes("+") ? "text-green-500" : "text-red-500"
                         )}>
                           {user.change}
                         </span>
                         <span className="text-xl md:text-lg font-black text-white">{user.score}</span>
                       </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 text-center md:text-right border-t border-white/10 pt-4">
             <button className="text-xs font-bold text-green-500 hover:text-white transition uppercase tracking-widest">
               View Full Standings →
             </button>
          </div>

        </div>
      </SectionWrapper>
    </section>
  );
};

export default Leaderboard;