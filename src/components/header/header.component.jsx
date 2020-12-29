import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.utils";

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
