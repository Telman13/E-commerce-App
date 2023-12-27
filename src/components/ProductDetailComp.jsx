// ProductDetailComp.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { addToFavourite, removeFromFavourite } from "../redux/favouriteSlice";

const ProductDetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isAlreadyFavourite = favourites.some(
      (fav) => fav.id === productDetail?.id
    );
    setIsFavourite(isAlreadyFavourite);
  }, [productDetail]);

  const Increment = () => {
    if (count < productDetail?.rating?.count) setCount(count + 1);
  };

  const Decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const addBasket = () => {
    if (count > 0) {
      dispatch(
        addToCart({
          id: productDetail?.id,
          title: productDetail?.title,
          image: productDetail?.image,
          price: productDetail?.price,
          quantity: count,
        })
      );
    } else {
      alert("Kac tane olsun");
    }
  };

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourite(productDetail?.id));
    } else {
      dispatch(
        addToFavourite({
          id: productDetail?.id,
          title: productDetail?.title,
          image: productDetail?.image,
          price: productDetail?.price,
        })
      );
    }

    setIsFavourite(!isFavourite);
  };
  return (
    <div className="flex gap-10 my-12 ">
      <div className="relative">
        {isFavourite ? (
          <AiFillHeart
            size={35}
            className="absolute right-0 -top-5 cursor-pointer text-red-500"
            onClick={toggleFavourite}
          />
        ) : (
          <AiOutlineHeart
            size={35}
            className="absolute right-0 -top-5 cursor-pointer"
            onClick={toggleFavourite}
          />
        )}
        <img
          className="w-[600px] h-[400px] object-contain"
          src={productDetail?.image}
          alt=""
        />
      </div>

      <div>
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div className="my-3 text-2xl">{productDetail?.description}</div>
        <div className="my-3 text-xl">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-3 text-xl">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="flex items-center my-3 text-4xl font-bold">
          {productDetail?.price}
          <span className="text-sm ml-2">AZN</span>
        </div>
        <div className="flex">
          <div
            onClick={Decrement}
            className="text-4xl font-bold cursor-pointer"
          >
            -
          </div>
          <input
            className="w-[65px] text-center text-4xl cursor-pointer "
            type="text"
            value={count}
          />
          <div
            onClick={Increment}
            className="text-4xl font-bold cursor-pointer"
          >
            +
          </div>
        </div>
        <button
          onClick={addBasket}
          className="text-2xl font-bold bg-red-500 text-white rounded-md p-2 my-5 mx-5 flex items-center justify-center hover:opacity-65"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductDetailComp;
