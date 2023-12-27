import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavouriteComp from "../components/FavouriteComp";
import { clearFavourite } from "../redux/favouriteSlice";

const Favourite = () => {
  const { carts } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const removeAllFromFavourite = () => {
    dispatch(clearFavourite());
  };
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          <div
            onClick={removeAllFromFavourite}
            className="border p-7 text-xl font-bold mx-3 cursor-pointer hover:text-red-500 delay-100"
          >
            Hepsini kaldır
          </div>
          {carts?.map((cart, i) => (
            <FavouriteComp key={i} cart={cart} />
          ))}
        </div>
      ) : (
        <div className="font-bold text-xl relative w-lwh">
          <div className="absolute l-50%">Favorileriniz bos</div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
