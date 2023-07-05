import React from "react";
import Announcement from "../../components/e-com/Announcement";
import Categories from "../../components/e-com/Categories";
import Footer from "../../components/e-com/Footer";
import Navbar from "../../components/e-com/Navbar";
import Newsletter from "../../components/e-com/Blog";
import Products from "../../components/e-com/Products";
import Slider from "../../components/e-com/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;