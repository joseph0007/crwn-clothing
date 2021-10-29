// import "./customButton.styles.scss";
import { CustomButtonContainer } from "./customButton.styles";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;

// <button
//       className={`${isGoogleSignIn ? "custom-button--blue" : ""} ${
//         inverted ? "inverted" : ""
//       } custom-button`}
//       {...otherProps}
//     >
//       {children}
//     </button>
