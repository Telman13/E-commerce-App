import React, { useState } from "react";
import Slider from "../components/Home/SliderComp.jsx";
import Sorting from "../components/Home/Sorting";
import Category from "../components/Home/Category";
import Product from "../components/Home/Product";

const Home = ({ value }) => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  return (
    <div>
      <Slider />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Product category={category} sort={sort} value={value} />
      </div>
    </div>
  );
};

export default Home;
