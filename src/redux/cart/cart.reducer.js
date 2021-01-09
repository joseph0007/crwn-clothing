import cartTypes from "./cart.types";
import { addNewCartItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_VISIBLE:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addNewCartItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
