import React from "react";
// import { compose } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../customButton/customButton.component";
import CartItem from "../cartItem/cartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => selectCartItems(state));

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))
        ) : (
          <span className="empty-message">No Items In The Cart :(</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartVisibility());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cartItems: selectCartItems(state),
//   };
// };

// when you dont pass amapDispatchToProps method then redux automatically passes a dispatch method in the props of the function so
// that it can be used inside the Component to dispatch any action :)
export default CartDropdown;

// compose(connect(mapStateToProps), withRouter)(CartDropdown);
// withRouter(connect(mapStateToProps)(CartDropdown));
