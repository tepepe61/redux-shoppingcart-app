import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/CartSlice";
import modalReducer from "./features/modal/ModalSlice";

export const store = configureStore({
  // 1. importの時に{}で入れてないから変数名を定義できる. sliceからreudcerにね
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
