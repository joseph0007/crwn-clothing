import "./signpage.styles.scss";
import SignIn from "../../components/signIn/signIn.component";
import SignUp from "../../components/signUp/signup.component";

const SignInPage = () => (
  <div className="sign-container">
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
);

export default SignInPage;
