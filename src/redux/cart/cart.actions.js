import cartTypes from "./cart.types";

export const toggleCartVisibility = () => {
  return {
    type: cartTypes.TOGGLE_CART_VISIBLE,
  };
};

export const addCartItem = (item) => {
  return {
    type: cartTypes.ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: cartTypes.CLEAR_CART_ITEM,
    payload: item,
  };
};
