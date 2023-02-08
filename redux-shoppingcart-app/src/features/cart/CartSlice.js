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
      console.log(action);
      const itemId = action.payload;
      // 5. 選択した商品idと違う物だけを集める。= 選択したidは集めないので削除したことになる。
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

// 2. cartReducer.reducerの書き方でいいんだね。
export default cartSlice.reducer;
export const { clearCart, removeItem } = cartSlice.actions;
