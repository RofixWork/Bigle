import React from "react";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Clients from "../components/Clients";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing";
import Solution from "../components/Solution";
import Subscribe from "../components/Subscribe";
import Video from "../components/Video";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Solution />
      <Work />
      <Video />
      <Partners />
      <Subscribe />
      <Pricing />
      <Clients />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
