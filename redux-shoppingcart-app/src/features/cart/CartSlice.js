import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
};

const cartSlice = createSlice({
  // 3.nameがuseSelector((store) =>store.cart)の←cartになる
  name: "cart",
  // 1. 初期値
  initialState,
  // 4. reducersを定義してaction名:処理まで定義すると、検証モードのreducersとactionsが自動定義されるよ
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      // 5. 選択した商品idと違う物だけを集める。= 選択したidは集めないので削除したことになる。
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

// 2. cartReducer.reducerの書き方でいいんだね。
export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
