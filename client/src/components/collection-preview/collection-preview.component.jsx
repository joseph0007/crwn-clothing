import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import PreviewCollection from "../../components/previewCollection/previewCollection.component";
import { selectShopItemsArr } from "../../redux/shop/shop.selectors";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ shopItems }) => (
  <div className="collection-preview">
    {shopItems.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps}></PreviewCollection>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItemsArr,
});

export default connect(mapStateToProps)(CollectionPreview);
