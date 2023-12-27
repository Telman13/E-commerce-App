import { createSlice } from "@reduxjs/toolkit";

const fetchFromLS = () => {
  let favourites = localStorage.getItem("favourites");
  if (favourites) {
    return JSON.parse(localStorage.getItem("favourites"));
  } else {
    return [];
  }
};
const saveToLS = (data) => {
  localStorage.setItem("favourites", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLS(),
};

export const favouriteSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
      const isItem = state.carts.find((item) => item.id === action.payload.id);
      if (isItem) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = item.price * tempQty;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        saveToLS(state.carts);
      } else {
        state.carts.push(action.payload);
        saveToLS(state.carts);
      }
    },

    removeFromFavourite: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      saveToLS(state.carts);
    },
    clearFavourite: (state) => {
      state.carts = [];
      saveToLS(state.carts);
    },
  },
});

export const { addToFavourite, removeFromFavourite, clearFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
