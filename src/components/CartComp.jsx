import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cart?.id));
    window.location.reload();
  };
  return (
    <div className="flex justify-between items-center py-7">
      <img
        className="w-[250px] h-[250px] object-contain"
        src={cart?.image}
        alt=""
      />
      <div className="text-xl w-[500px]">{cart?.title}</div>
      <div className="font-bold text-red-500 text-xl ">
        {cart?.price} AZN ({cart?.quantity})
      </div>
      <div
        onClick={handleRemoveFromCart}
        className="cursor-pointer text-xl font-bold hover:opacity-50 delay-150"
      >
        Ürünü sil
      </div>
    </div>
  );
};

export default CartComp;
