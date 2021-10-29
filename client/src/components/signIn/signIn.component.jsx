import React from "react";
import { connect } from "react-redux";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
// import { signInWithGoogle } from "../../utils/firebase/firebase.utils";
import { auth } from "../../utils/firebase/firebase.utils";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/users/users.actions";

import "./signIn.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // viewThis() {
  //   // points to current object(proper object)
  //   console.log(this);

  //   // points to undefined
  //   (function () {
  //     console.log(this);
  //   })();
  // }

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

  handleChange(e) {
    // console.log(this);
    const { name, value } = e.target;

    console.log(name, value);

    // set the state value for later submission
    this.setState({ [name]: value });
  }

  render() {
    const { signInWithGoogle, signInWithEmail } = this.props;
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        {/* {this.viewThis()} */}
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        {/* if we are passing a method onto some other function then if the method is its own method then the 'this' will
         be set to the object which it is a part of!!
         if the method is from a prototype and is passed to another function then its 'this' will not be set to the object from
         whos prototype it is called instead it will be undefined and you will explicitly need to set the 'this' !! */}
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
            <CustomButton
              type="button"
              onClick={() =>
                signInWithEmail({
                  email,
                  password,
                })
              }
            >
              {" "}
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (emailAndPass) => dispatch(emailSignInStart(emailAndPass)),
});

export default connect(null, mapDispatchToProps)(SignIn);
