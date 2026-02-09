import Navbar from "../../components/Navbar";
import Hero from "./components/Hero.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#f3e4c3] flex flex-col">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
};

export default LandingPage;
