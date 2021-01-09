import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
