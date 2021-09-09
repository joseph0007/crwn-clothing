import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import "./header.styles.scss";
// import { Link } from "react-router-dom";
import {
  HeaderContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer,
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cartIcon/carticon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import { userLogoutStart } from "../../redux/users/users.actions";

const Header = ({ currentUser, cartVisibility, userLogout }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">Shop</OptionLink>
      <OptionLink to="/contacts">contacts</OptionLink>
      {currentUser ? (
        <OptionLink
          // the as prop allows us to change the html element (styled-components)
          as="div"
          onClick={userLogout}
          style={{ cursor: "pointer" }}
        >
          Sign out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign in</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {cartVisibility ? <CartDropdown /> : ""}
  </HeaderContainer>
);
// this is the pattern or way we follow to pass state data to components using redux and hence we dont need to worry about
// props drilling!!
// createStructuredSelector passes the state data implicitly and so we dont need to worry about passing it every time.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisibility: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogoutStart()),
});

// higher order functions in react are functions that recieve a Component and returns a modified Component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
