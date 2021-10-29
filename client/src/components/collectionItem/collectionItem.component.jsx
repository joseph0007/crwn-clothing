import { connect } from "react-redux";

import "./collectionItem.styles.scss";
import CustomButton from "../customButton/customButton.component";

import { addCartItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addCartItem }) => {
  const { imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton onClick={() => addCartItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
