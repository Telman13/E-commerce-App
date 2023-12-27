import React from "react";
import { useNavigate } from "react-router-dom";

const ProductComp = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`detail/${product.id}`)}
      className="w-[430px] p-3 mb-5 mx-3 relative cursor-pointer"
    >
      <div className="absolute right-0 top-0 text-2xl bg-black text-white rounded-md p-2 m-1">
        {product.price} <span>AZN</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product.image}
        alt=""
      />
      <div className="p-5 text-xl mt-5 text-center">{product.title}</div>
    </div>
  );
};

export default ProductComp;
