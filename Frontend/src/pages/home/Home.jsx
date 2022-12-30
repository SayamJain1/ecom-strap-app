import React from "react";
import "./Home.scss";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Contact from "../../components/contact/Contact";

function Home() {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Contact />
    </div>
  );
}

export default Home;
