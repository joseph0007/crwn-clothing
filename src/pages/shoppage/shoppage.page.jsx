import React from "react";
import { SHOP_DATA } from "./shoppage.data";
import "./shoppage.styles.scss";
import PreviewCollection from "../../components/previewCollection/previewCollection.component";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    const { shopData } = this.state;
    return (
      <div className="shop-page">
        {shopData.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps}></PreviewCollection>
        ))}
      </div>
    );
  }
}
