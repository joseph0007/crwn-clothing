import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.shop_data
);

export const selectShopItemsArr = createSelector([selectShop], (shop) => {
  return shop.shop_data
    ? Object.keys(shop.shop_data).map((key) => shop.shop_data[key])
    : [];
});

/**
 * One quick addition, our selectCategory function we just wrote is not memoized due to categoryUrlParam being passed in from
 * our category component's mapStateToProps running whenever our state changes and and calling a new instance of our selectCategory
 *  function. In this case categoryUrlParam is a dynamic argument meaning it can change, so to memoize selectCategory we actually
 * have to memoize the whole function using a memoize helper function. We can leverage the lodash library, specifically their memoize
 * helper function by adding it our packages like so:
 *
 * By wrapping this function is memoize, we're saying that whenever this function gets called and receives categoryUrlParam,
 * I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the
 * same categoryUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just
 * return the selector that's been stored.
 * */
export const selectCategory = memoize((categoryUrlParams) =>
  // we normalised the shop_data from an array to an object so that we can efficiently find the data without performance issue!!
  createSelector([selectShopItems], (shop_data) => shop_data[categoryUrlParams])
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const isShopDataLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.shop_data
);
