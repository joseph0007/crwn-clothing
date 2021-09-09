import { takeLatest, put, call, all } from "redux-saga/effects";
import userTypes from "../users/user.types";
import { clearAllCartItem } from "./cart.actions";
import cartTypes from "./cart.types";

export function* clearAllCart() {
  yield put(clearAllCartItem());
}

export function* clearCartOnSignOut() {
  yield takeLatest(userTypes.USER_LOGOUT_SUCCESS, clearAllCart);
}

export function* clearAllCartItemOnAction() {
  yield takeLatest(cartTypes.CLEAR_ALL_CART_ACTION, clearAllCart);
}

export function* cartSagas() {
  yield all([call(clearCartOnSignOut), call(clearAllCartItemOnAction)]);
}
