import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./users/users.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
