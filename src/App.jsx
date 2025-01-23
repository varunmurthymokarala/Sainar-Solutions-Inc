import ButtonGradient from "./assets/assets/svg/ButtonGradient";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Careers from "./Components/Careers";
import Footer from "./Components/Footer";










const App = () => {
  return (
    <>
      <div className="pt-[4.75 rem] lg:pt-[5.25rem] overflow-hidden">
       <Header />
       <Hero />
       <Benefits />
       <Collaboration />
       <Services />
       <Pricing />
       <Roadmap />
       <Careers />
       <Footer />
       
       
      
      </div>
      <ButtonGradient />
    </>
  );
};

export default App
