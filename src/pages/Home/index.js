import React from "react";
import { Banner, Service, Testimonial } from "../../components";
import Kontak from "../Kontak";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Testimonial />
      <Kontak />
    </div>
  );
};

export default Home;
