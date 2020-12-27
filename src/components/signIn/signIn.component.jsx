import React from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { signInWithGoogle } from "../../utils/firebase/firebase.utils";

import "./signIn.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

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
          />

          {/* <label for="password">Password</label> */}

          <FormInput
            handleChange={this.handleChange}
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            id="password"
          />

          <CustomButton type="submit"> Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
