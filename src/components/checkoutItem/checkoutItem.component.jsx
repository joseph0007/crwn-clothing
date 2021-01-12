import { connect } from "react-redux";
import {
  removeCartItem,
  addCartItem,
  reduceCartItem,
} from "../../redux/cart/cart.actions";

import "./checkoutItem.styles.scss";

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  addCartItem,
  reduceCartItem,
}) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="left" onClick={() => reduceCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="quantity__text">{quantity}</span>
        <div className="right" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  reduceCartItem: (item) => dispatch(reduceCartItem(item)),
});

export default connect(null, mapDispatchToState)(CheckoutItem);
