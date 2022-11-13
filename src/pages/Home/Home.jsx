import React from "react";
import {
  Banner,
  ContactUs,
  DentalCare,
  Info,
  MakeAppointment,
  Services,
  Testimonial,
} from "./Components";

const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <DentalCare />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
