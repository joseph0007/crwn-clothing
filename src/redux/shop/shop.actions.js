import { fetchShopData, firestore } from "../../utils/firebase/firebase.utils";
import { shopTypes } from "./shop.types";

// export const updateShopData = (shopDataObj) => ({
//   type: shopTypes.UPDATE_SHOPDATA,
//   payload: shopDataObj,
// });

const fetchShopDataProcessing = () => ({
  type: shopTypes.FETCH_SHOPDATA_PROCESSING,
});

const fetchShopDataSuccess = (shopData) => ({
  type: shopTypes.FETCH_SHOPDATA_SUCCESS,
  payload: shopData,
});

const fetchShopDataFailure = (errorMessage) => ({
  type: shopTypes.FETCH_SHOPDATA_FAILURE,
  payload: errorMessage,
});

export const fetchShopCollectionsAsync = () => (dispatch) => {
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
