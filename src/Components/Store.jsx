import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "../Redux/CartSystem";

export const store = configureStore({
  reducer: {
    user: CartSystem,
  },
});
export default store;
