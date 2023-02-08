import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  // 3.nameがuseSelector((store) =>store.cart)の←cartになる
  name: "cart",
  // 1. 初期値
  initialState,
  reducers: {},
});

// 2. cartReducer.reducerの書き方でいいんだね。
export default cartSlice.reducer;
