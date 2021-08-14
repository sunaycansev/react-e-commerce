import React from "react";
import Header from "../../components/Header/Header";
import "./_HomePage.scss";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <ProductList />
    </div>
  );
};
export default HomePage;
