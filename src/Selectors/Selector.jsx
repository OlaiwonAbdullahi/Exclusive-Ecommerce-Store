import { createSelector } from "reselect";

const selectCart = (state) => state.cart || [];

export const memoizedCartSelector = createSelector(
  [selectCart],
  (cart) => cart
);
