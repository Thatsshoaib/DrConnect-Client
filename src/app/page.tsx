import Header from "../../components/Header/header";
import Hero from "../../components/landing/HeroSection";
import Services from "../../components/landing/ServicesSection";
import Whoarewe from "../../components/landing/WhoAreWe";

export default function Home() {
  return (
      <>
      <div>
        <Header/>
      <Hero/>
      <Whoarewe/>
      <Services/>
      </div>
    </>
  );
}
