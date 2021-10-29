import { shopTypes } from "./shop.types";

const INITIAL_STATE = {
  shop_data: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_SHOPDATA_PROCESSING: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case shopTypes.FETCH_SHOPDATA_SUCCESS: {
      return {
        ...state,
        shop_data: action.payload,
        isFetching: false,
      };
    }

    case shopTypes.FETCH_SHOPDATA_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default shopReducer;
