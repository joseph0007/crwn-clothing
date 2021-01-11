import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cartIcon/carticon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/users/users.selectors";

const Header = ({ currentUser, cartVisibility }) => (
  <div className="header">
    <Link to="/">
      <Logo />
    </Link>

    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/contacts" className="option">
        contacts
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => auth.signOut()}
          style={{ cursor: "pointer" }}
        >
          Sign out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in
        </Link>
      )}
      <CartIcon />
    </div>

    {cartVisibility ? <CartDropdown /> : ""}
  </div>
);
// this is the pattern or way we follow to pass state data to components using redux and hence we dont need to worry about
// props drilling!!
// createStructuredSelector passes the state data implicitly and so we dont need to worry about passing it every time.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisibility: selectHidden,
});

// higher order functions in react are functions that recieve a Component and returns a modified Component
export default connect(mapStateToProps)(Header);
