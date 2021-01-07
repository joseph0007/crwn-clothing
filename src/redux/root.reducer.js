import { combineReducers } from "redux";
import userReducer from "./users/users.reducer";

export default combineReducers({
  user: userReducer,
});
