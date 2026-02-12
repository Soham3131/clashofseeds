// import SectionWrapper from "./SectionWrapper";
// import { motion } from "framer-motion";
// import { FaUserCheck, FaFlask, FaMicroscope, FaTrophy } from "react-icons/fa";

// const steps = [
//   {
//     icon: <FaUserCheck />,
//     title: "Register",
//     desc: "Join an upcoming event and create your performance profile.",
//   },
//   {
//     icon: <FaFlask />,
//     title: "Lab Submission",
//     desc: "Provide your sample at our certified partner labs.",
//   },
//   {
//     icon: <FaMicroscope />,
//     title: "Scientific Analysis",
//     desc: "High-speed microscopic tracking measures cellular performance.",
//   },
//   {
//     icon: <FaTrophy />,
//     title: "Compete",
//     desc: "Get your health score and rank on the global leaderboard.",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <SectionWrapper id="process">
//       <h2 className="text-4xl font-bold text-center mb-16">
//         How It Works
//       </h2>

//       <div className="grid md:grid-cols-4 gap-8">
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -8 }}
//             className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 transition"
//           >
//             <div className="text-green-400 text-3xl mb-4">
//               {step.icon}
//             </div>
//             <h3 className="text-xl font-semibold mb-2">
//               {step.title}
//             </h3>
//             <p className="text-white/60 text-sm">
//               {step.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// };

// export default HowItWorks;

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FaUserCheck, FaFlask, FaMicroscope, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserCheck />,
    title: "Register",
    desc: "Sign up for the next Clash event and create your personal performance profile.",
  },
  {
    icon: <FaFlask />,
    title: "Sample Collection",
    desc: "Provide your sample at a certified partner laboratory under secure and private conditions.",
  },
  {
    icon: <FaMicroscope />,
    title: "Microscopic Analysis",
    desc: "Advanced imaging tracks sperm motility, speed, vitality, and cellular behavior.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Score",
    desc: "Receive your health performance metrics and compete on the national leaderboard.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="relative py-32 bg-black overflow-hidden">
     
       
      {/* <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-20"
      >
        <source src="/process.mp4" type="video/mp4" />
      </video>
      */}

      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[900px] h-[900px] bg-green-500/10 blur-[200px] rounded-full" />

      <SectionWrapper>
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From lifestyle to laboratory — measure real cellular performance through
            a secure scientific process.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 top-[260px] bottom-32 w-[2px] bg-white/10"></div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              {/* Icon Circle */}
              <div className="min-w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-green-400 text-2xl shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default HowItWorks;
