import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemsCount } = useSelector(
    (state) => state.carts
  );
  console.log(carts, totalAmount, itemsCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  const removeAllFromCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          <div
            onClick={removeAllFromCart}
            className="border p-7 text-xl font-bold mx-3 cursor-pointer hover:text-red-500 delay-100"
          >
            Hepsini kaldır
          </div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="font-bold text-2xl flex justify-end items-start text-red-500">
            {totalAmount.toFixed(2)} AZN
          </div>
        </div>
      ) : (
        <div className="font-bold text-xl relative w-lwh">
          <div className="absolute l-50%">Sepetiniz bos</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
