import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./shoppage.styles.scss";
import PreviewCollection from "../../components/previewCollection/previewCollection.component";
import { selectShopItems } from "../../redux/shop/shop.selectors";

class Shop extends React.Component {
  render() {
    return (
      <div className="shop-page">
        {this.props.shopItems.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps}></PreviewCollection>
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopItems,
});

export default connect(mapStateToProps)(Shop);
