import { connect } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";

import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem, removeCartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToState = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToState)(CheckoutItem);
