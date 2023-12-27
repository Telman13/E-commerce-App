import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = ({ setValue }) => {
  const dispatch = useDispatch();
  const { itemCount, carts } = useSelector((state) => state.carts);
  console.log(itemCount);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };
  const getValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <div className="flex items-center justify-between my-7 ">
      <div onClick={handleHomeClick} className="text-4xl cursor-pointer">
        BoefShop
      </div>
      <div className="flex gap-6 ">
        <div className="flex align-items px-3">
          <input
            onChange={getValue}
            type="text"
            placeholder="arama yap..."
            className="outline-none"
          />
          <FaSearch size={19} className="cursor-pointer" />
        </div>
        <AiOutlineHeart
          onClick={() => navigate("favourite")}
          size={23}
          className="cursor-pointer"
        />
        <div
          onClick={() => navigate("cart")}
          className="relative cursor-pointer"
        >
          <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {carts?.length}
          </div>
          <MdOutlineShoppingCart size={23} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
