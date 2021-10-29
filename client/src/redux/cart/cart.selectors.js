import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartQuantity = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((acc, curr) => (acc += curr.quantity), 0)
);

export const selectCartTotal = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((acc, curr) => (acc += curr.quantity * curr.price), 0)
);

/**
 * selectors are a type of memoized function which remembers the previous arguments passed and previous result.
 * Its basically caching the arguments passed which helps in deciding whether to recompute the function or not.
 * React component re-renders if a new object is passed to it and so what selectors do is they decide if the arguments passed
 * bring any change or not and based on that passes the old values or new values. If the old values are passed then the react component
 * does not re-render and a lot of computing power is saved.
 */
