import { connect } from "react-redux";
import { compose } from "redux";
import { withSpinner } from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";

import Category from "./category.component";
import { isShopDataLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isShopDataLoaded(state),
});

const CategoryCollection = compose(
  connect(mapStateToProps),
  withSpinner
)(Category);

export default CategoryCollection;
