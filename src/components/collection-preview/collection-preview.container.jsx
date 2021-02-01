import { connect } from "react-redux";
import { compose } from "redux";
import { withSpinner } from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "./collection-preview.component";
import { selectIsFetching } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionPreviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPreview);

export default CollectionPreviewContainer;
