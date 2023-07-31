import React from "react";
import Announcement from "../../components/e-com/Announcement";
import Categories from "../../components/e-com/Categories";
import Newsletter from "../../components/e-com/Blog";
import Products from "../../components/e-com/Products";
import Slider from "../../components/e-com/Slider";
import TopBar from "../../components/CusTopBar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <TopBar title="Products" />
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