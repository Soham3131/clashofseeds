// import SectionWrapper from "./SectionWrapper";
// import { motion } from "framer-motion";
// import clsx from "clsx";

// const data = [
//   { name: "Aarav_Fit", country: "IND", score: 99 },
//   { name: "NeoVitalX", country: "USA", score: 97 },
//   { name: "Kenji_Bio", country: "JPN", score: 96 },
//   { name: "MaxHealthPro", country: "GER", score: 94 },
//   { name: "Liam_Perform", country: "UK", score: 93 },
//   { name: "Carlos_Move", country: "ESP", score: 92 },
//   { name: "Omar_Fitness", country: "UAE", score: 90 },
//   { name: "Rohan_Active", country: "IND", score: 89 },
// ];

// const Leaderboard = () => {
//   return (
//     <section className="relative overflow-hidden">

//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute w-full h-full object-cover opacity-20"
//       >
//         <source src="/videos/results.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-black/80" />

//       <SectionWrapper id="leaderboard">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
//           Global Performance Leaderboard
//         </h2>

//         <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

//           {data.map((user, i) => {
//             const isTop3 = i < 3;

//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 className={clsx(
//                   "flex items-center justify-between px-6 py-4 border-b border-white/10 transition",
//                   "hover:bg-white/5",
//                   isTop3 && "bg-green-500/5"
//                 )}
//               >
//                 {/* Left */}
//                 <div className="flex items-center gap-4">
//                   {/* Rank */}
//                   <div
//                     className={clsx(
//                       "w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold",
//                       i === 0 && "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.6)]",
//                       i === 1 && "bg-gray-300 text-black",
//                       i === 2 && "bg-amber-700 text-white",
//                       i > 2 && "bg-white/10 text-white"
//                     )}
//                   >
//                     {i + 1}
//                   </div>

//                   {/* Name + Country */}
//                   <div>
//                     <p className="font-semibold">{user.name}</p>
//                     <p className="text-xs text-white/50">{user.country}</p>
//                   </div>
//                 </div>

//                 {/* Score */}
//                 <div className="text-green-400 font-bold text-lg">
//                   {user.score}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom text */}
//         <p className="text-center text-white/50 mt-8 text-sm">
//           Rankings based on laboratory performance metrics and health analysis.
//         </p>
//       </SectionWrapper>
//     </section>
//   );
// };

// export default Leaderboard;

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import clsx from "clsx";

const data = [
  { name: "Arjun Mehta", city: "Gurgaon", score: 99, speed: "48 µm/s", vitality: "96%" },
  { name: "Rohit Sharma", city: "Delhi", score: 97, speed: "46 µm/s", vitality: "94%" },
  { name: "Karthik Reddy", city: "Hyderabad", score: 96, speed: "45 µm/s", vitality: "93%" },
  { name: "Aditya Singh", city: "Bangalore", score: 94, speed: "44 µm/s", vitality: "91%" },
  { name: "Vikram Patel", city: "Ahmedabad", score: 93, speed: "43 µm/s", vitality: "90%" },
  { name: "Rahul Nair", city: "Kochi", score: 92, speed: "42 µm/s", vitality: "89%" },
  { name: "Sandeep Kumar", city: "Chennai", score: 90, speed: "41 µm/s", vitality: "87%" },
  { name: "Manish Verma", city: "Pune", score: 89, speed: "40 µm/s", vitality: "86%" },
];

const Leaderboard = () => {
  return (
    <section id="leaderboard" className="relative py-32 bg-black overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[900px] h-[900px] bg-green-500/10 blur-[200px] rounded-full" />

      {/* Scientific Grid */}
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
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-green-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">
            National Rankings
          </p>

          <h2 className="text-5xl font-bold text-white mb-4">
            Performance Leaderboard
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Top participants ranked based on laboratory analysis of motility,
            speed, and cellular vitality across India.
          </p>
        </div>

        {/* Table */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="grid grid-cols-5 px-6 py-4 text-xs uppercase text-white/40 font-mono border-b border-white/10">
            <span>Rank</span>
            <span>Name</span>
            <span>City</span>
            <span>Speed</span>
            <span className="text-right">Score</span>
          </div>

          {data.map((user, i) => {
            const isTop3 = i < 3;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={clsx(
                  "grid grid-cols-5 items-center px-6 py-4 border-b border-white/10 text-sm",
                  "hover:bg-white/5 transition",
                  isTop3 && "bg-green-500/5"
                )}
              >
                {/* Rank */}
                <div
                  className={clsx(
                    "w-8 h-8 flex items-center justify-center rounded-full font-bold",
                    i === 0 && "bg-yellow-400 text-black",
                    i === 1 && "bg-gray-300 text-black",
                    i === 2 && "bg-amber-700 text-white",
                    i > 2 && "bg-white/10 text-white"
                  )}
                >
                  {i + 1}
                </div>

                {/* Name */}
                <div className="font-semibold text-white">
                  {user.name}
                </div>

                {/* City */}
                <div className="text-white/60">
                  {user.city}
                </div>

                {/* Speed */}
                <div className="text-green-400 font-mono">
                  {user.speed}
                </div>

                {/* Score */}
                <div className="text-right font-bold text-white">
                  {user.score}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/50 mt-8 text-sm">
          Data based on certified laboratory testing. Rankings updated monthly.
        </p>
      </SectionWrapper>
    </section>
  );
};

export default Leaderboard;
