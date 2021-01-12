import cartTypes from "./cart.types";
import { addNewCartItem, reduceCartItemQuantity } from "./cart.utils";

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

    case cartTypes.REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: reduceCartItemQuantity(state.cartItems, action.payload),
      };

    case cartTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
