import React from "react";
import Categories from "../components/Categories";
import ShopList from "../components/ShopList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Categories />
      <h1 className="text-2xl font-bold mt-8 mb-4">All Shops</h1>
      <ShopList />
      <Footer />
    </div>
  );
};

export default HomePage;
