import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";

import { fetchShopCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./users/user.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchShopCollectionsStart),
    call(userSagas),
    call(cartSagas),
  ]);
}
