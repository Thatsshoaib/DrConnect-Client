import Header from "../../components/Header/header";
import CounterSection from "../../components/landing/CounterSection";
import DoctorSlider from "../../components/landing/DoctorSlider";
import Hero from "../../components/landing/HeroSection";
import HowItWorks from "../../components/landing/Howitworks";
import Services from "../../components/landing/ServicesSection";
import TestimonialsSection from "../../components/landing/Testimonial";
import Whoarewe from "../../components/landing/WhoAreWe";

export default function Home() {
  return (
      <>
      <div>
        <Header/>
      <Hero/>
      <Whoarewe/>
      <CounterSection/>
      <DoctorSlider/>
      <Services/>
      <HowItWorks/>
      <TestimonialsSection/>
      </div>
    </>
  );
}
