import React from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { signInWithGoogle } from "../../utils/firebase/firebase.utils";
import { auth } from "../../utils/firebase/firebase.utils";

import "./signIn.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      // call the firebase signIn method!!
      // which will then trigger the onAuthStateChange() method and will do the rest of the steps!!
      await auth.signInWithEmailAndPassword(email, password);

      // clear the fields
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("user not logged in!!", error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    // set the state value for later submission
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            label="email"
            // name value pair of an object
            name="email"
            value={this.state.email}
            id="email"
            required
          />

          {/* <label for="password">Password</label> */}

          <FormInput
            handleChange={this.handleChange}
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            id="password"
            required
          />

          <div className="button-group">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
