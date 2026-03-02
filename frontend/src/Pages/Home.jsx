import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import HomeCourses from "../Components/HomeCourses";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import DoubtClearance from "../Components/DoubtClearance";
import FAQ from "../Components/FAQ";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Hero />
      <HomeCourses />
      <Testimonial />
      <DoubtClearance />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
