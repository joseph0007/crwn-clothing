import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./users/users.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

const persistConfig = {
  // key value
  key: "root",
  storage,
  // only cart will be persisted
  whitelist: ["cart"],
  stateReconciler: autoMergeLevel2,
};

// enhanced rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
