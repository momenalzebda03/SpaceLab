import ContactUs from "../components/LandingPage/ContactUs";
import Hero from "../components/LandingPage/Hero";
import Numbers from "../components/LandingPage/Numbers";
import OurBusiness from "../components/LandingPage/OurBusiness";
import OurMethodology from "../components/LandingPage/OurMethodology";
import OurServices from "../components/LandingPage/OurServices";
import OurSuccessPartners from "../components/LandingPage/OurSuccessPartners";
import WhatDistinguishesUs from "../components/LandingPage/WhatDistinguishesUs";

export default function Home() {
  return (
    <>
      <Hero />
      <OurSuccessPartners />
      <WhatDistinguishesUs />
      <Numbers />
      <OurServices />
      <OurMethodology />
      <OurBusiness />
      <ContactUs />
    </>
  );
}
