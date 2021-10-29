import React from "react";
import { Route } from "react-router-dom";
// import { firestore, fetchShopData } from "../../utils/firebase/firebase.utils";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import Category from "../../components/category/category.component";
// import { withSpinner } from "../../components/with-spinner/with-spinner.component";
// import {
//   selectIsFetching,
//   isShopDataLoaded,
// } from "../../redux/shop/shop.selectors";

import { fetchShopDataProcessing } from "../../redux/shop/shop.actions";
// import { fetchShopDataProcessing } from "../../redux/shop/shop.actions";

import "./shoppage.styles.scss";
import CollectionPreviewContainer from "../../components/collection-preview/collection-preview.container";
import CategoryCollection from "../../components/category/category.collection";

// const WithSpinnerCollectionPreview = withSpinner(CollectionPreview);
// const WithSpinnerCategory = withSpinner(Category);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchShopDataProcessing } = this.props;
    fetchShopDataProcessing();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}/`}
          // render={(props) => (
          //   <WithSpinnerCollectionPreview isLoading={isFetching} {...props} />
          // )}
          component={CollectionPreviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          // render={(props) => (
          //   <WithSpinnerCategory isLoading={!isShopDataLoaded} {...props} />
          // )}
          component={CategoryCollection}
        ></Route>
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   isFetching: selectIsFetching,
//   isShopDataLoaded: isShopDataLoaded,
// });

/**
 * all thunk does is if we dispatch a function instead of an object(action object) then thunk will pass the dipatch to that
 * function and we can then use the dispatch method to pass multiple dispatch methods in the same function at once!!!
 */
const mapDispatchToProps = (dispatch) => ({
  fetchShopDataProcessing: () => dispatch(fetchShopDataProcessing()),
});

export default connect(null, mapDispatchToProps)(Shop);
