import "./carticon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";
import { selectCartQuantity } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartVisibility, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count"> {itemCount} </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartQuantity(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
