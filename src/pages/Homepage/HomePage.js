import React from "react";
import Header from "../../components/Header/Header";
import Slider from "../../components/Carousel/Carousel";
import "./_HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Slider />
      <ProductList />
      <Footer />
    </div>
  );
};
export default HomePage;
