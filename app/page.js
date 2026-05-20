import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Whatsappicon from "./components/Whatsappicon";
import Copyright from "./components/Copyright";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <Review />
      <Footer />
      <Whatsappicon />
      <Copyright />
    </>
  );
};

export default page;
