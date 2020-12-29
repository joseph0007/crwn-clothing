import React from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { auth, createUserDocDB } from "../../utils/firebase/firebase.utils";

import "./signup.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      return alert("password and confirm paswword dont match!!");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocDB(user, { displayName: name });

      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error creating the new user", error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I dont have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="name"
            name="name"
            value={this.state.name}
            type="text"
            id="name-2"
          />
          <FormInput
            label="email"
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            id="email-2"
          />
          <FormInput
            label="password"
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            id="password-2"
          />
          <FormInput
            label="confirm password"
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            id="confirmPassword-2"
          />

          <CustomButton>Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
