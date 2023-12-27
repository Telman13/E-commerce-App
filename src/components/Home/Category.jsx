import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="border text-l w-[255px] font-bold italic my-2 cursor-pointer">
      <div className="mb-5" onClick={() => window.location.reload()}>
        Kategori
      </div>
      {categories?.map((category, i) => (
        <div
          className={`mb-3 ${
            selectedCategory === category ? "opacity-50" : "opacity-100"
          } hover:text-red-500 delay-100`}
          key={i}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
