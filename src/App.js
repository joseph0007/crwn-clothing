import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/homepage/homepage.page.jsx";
import Shop from "./pages/shoppage/shoppage.page";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInPage from "./pages/signpage/signpage.component";
import CheckOut from "./pages/checkout/checkout.pages";
import { auth, createUserDocDB } from "./utils/firebase/firebase.utils";
import setCurrentUser from "./redux/users/users.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";

/**
 * a common issue with client side rendering was the issue of routing as opposed to server side rendering where we render the
 * page on the server side and send the new html page to the client.
 * there was no way of routing and constructing url endpoints to hit different pages because we were not relying on server anymore
 * to render the html but instead the client!!
 * but this issue was solved with client side routing which useses something that was build into the browser to route!!
 */

// const Hats = (props) => (
//   <div>
//     {console.log(props)}
//     <h1>Hats</h1>
//   </div>
// );

/**
 * Switch component just checks for the route inside of it and renders the first component that matches the url endpoint and ignores the
 * rest of the route and thus solving the issue of multiple components getting rendered due to all the route getting hit!!
 *
 */

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      const { setCurrentUser } = this.props;

      if (user) {
        // create new user
        const userDocRef = await createUserDocDB(user);

        // using the snapShot method which gives us both the data and the id
        // we can call the data() method on the docRef to get the data in the JSON format and the id can be
        // found on the snapShot object!!
        userDocRef.onSnapshot((snapShot) => {
          // this.setState(
          //   {
          //     currentUser: {
          //       id: snapShot.id,
          //       ...snapShot.data(),
          //     },
          //   },
          //   () => {
          //     console.log(this.state);
          //   }
          // );
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* {console.log(this.props)} */}
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <SignInPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// subscriber function: constantly listens for any change!!(like an event Listener)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
