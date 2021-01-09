import "./carticon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartVisibility, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, curr) => (acc += curr.quantity), 0),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
