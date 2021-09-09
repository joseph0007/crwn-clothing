import { call, put, takeEvery } from "redux-saga/effects";
import { firestore, fetchShopData } from "../../utils/firebase/firebase.utils";
import { shopTypes } from "./shop.types";
import { fetchShopDataSuccess, fetchShopDataFailure } from "./shop.actions";

export function* fetchShopCollectionsAsync() {
  try {
    const shopDataRef = firestore.collection("shopData");

    const shopData = yield shopDataRef.get();

    const convertedShopData = yield call(fetchShopData, shopData);

    yield put(fetchShopDataSuccess(convertedShopData));

    // yield console.log("working");
  } catch (error) {
    yield put(fetchShopDataFailure(error.message));
  }
}

export function* fetchShopCollectionsStart() {
  // takeEvery() listens for actions that gets dispatched due to some actions and then catches it!!
  yield takeEvery(
    shopTypes.FETCH_SHOPDATA_PROCESSING,
    fetchShopCollectionsAsync
  );
}

/**
 * export const fetchShopCollectionsAsync = () => (dispatch) => {
  // step1: set the isFetching to true
  dispatch(fetchShopDataProcessing());

  const shopDataRef = firestore.collection("shopData");

  shopDataRef
    .get()
    .then((snapshot) => {
      const shopData = fetchShopData(snapshot);

      // shopDataUpdater(shopData);
      // step2: if shopdata successfully retrieved then dispatch the success action
      dispatch(fetchShopDataSuccess(shopData));

      //remove the isLoading
      // this.setState({ isLoading: false });
    })
    .catch((err) => {
      dispatch(fetchShopDataFailure(err.message));
    });
};
 */
