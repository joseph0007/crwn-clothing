import { connect } from "react-redux";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, totalAmount }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Qunatity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((el) => (
      <CheckoutItem key={el.id} cartItem={el}></CheckoutItem>
    ))}
    <div className="total">
      <span>TOTAL: ${totalAmount}</span>
    </div>
    {totalAmount > 0 ? <StripeCheckoutButton price={totalAmount} /> : ""}
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalAmount: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckOutPage);
