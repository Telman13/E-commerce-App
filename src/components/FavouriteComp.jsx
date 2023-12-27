import React from "react";
import { useDispatch } from "react-redux";
import { removeFromFavourite } from "../redux/favouriteSlice";

const FavouriteComp = ({ cart }) => {
  const dispatch = useDispatch();
  const handleRemoveFromFavourites = () => {
    dispatch(removeFromFavourite(cart?.id));
  };

  return (
    <div className="flex justify-between items-center py-7">
      <img
        className="w-[250px] h-[250px] object-contain"
        src={cart?.image}
        alt=""
      />
      <div className="text-xl w-[500px]">{cart?.title}</div>
      <div className="font-bold text-red-500 text-xl ">{cart?.price} AZN</div>
      <div
        onClick={handleRemoveFromFavourites}
        className="cursor-pointer text-xl font-bold text-red-500 hover:opacity-50 delay-100"
      >
        Favorilerden kaldır
      </div>
    </div>
  );
};

export default FavouriteComp;
