// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import HowItWorks from "../components/HowItWorks";
// import Metrics from "../components/Metrics";
// import Leaderboard from "../components/Leaderboard";
// // import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className="bg-black text-white">
//       <Navbar />
//       <Hero />
//       <HowItWorks />
//       <Metrics />
//       <Leaderboard />
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Home;

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProcessSection from "../components/ProcessSection";
import Metrics from "../components/Metrics";
import Leaderboard from "../components/Leaderboard";
import JoinRace from "../components/JoinRace";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* Video 1 */}
      <Hero />

      {/* Content */}
      <HowItWorks />

      {/* Video 2 */}
      <ProcessSection />

      {/* Content */}
      <Metrics />

      {/* Video 3 */}
      <Leaderboard />

      {/* Final CTA */}
      <JoinRace />

      <Footer/>
    </div>
  );
};

export default Home;
