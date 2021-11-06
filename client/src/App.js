import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

// import "./App.css";
// import { HomePage } from "./pages/homepage/homepage.page.jsx";
// import Shop from "./pages/shoppage/shoppage.page";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
// import SignInPage from "./pages/signpage/signpage.component";
// import CheckOut from "./pages/checkout/checkout.pages";
import { auth, createUserDocDB } from "./utils/firebase/firebase.utils";
import { checkUserAuthStateStart } from "./redux/users/users.actions";
import { selectCurrentUser } from "./redux/users/users.selectors";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import GlobalStyles from "./App.styles";

// lazy loading
const HomePage = lazy(() => import("./pages/homepage/homepage.page.jsx"));
const Shop = lazy(() => import("./pages/shoppage/shoppage.page"));
const CheckOut = lazy(() => import("./pages/checkout/checkout.pages"));
const SignInPage = lazy(() => import("./pages/signpage/signpage.component"));

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
  //     // is used to get access to the actualDOM element (ref.current)
  //     // ref={this.state.ref} should be passed into the element that you want the reference of !!
  //     ref: React.createRef(),
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserAuthState } = this.props;

    checkUserAuthState();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyles />
        {/* {console.log(this.state.ref)} */}
        {/* {console.log(this.props)} */}
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
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
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

// subscriber function: constantly listens for any change!!(like an event Listener)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// ownProps is the props that are passed to the element when it is called somewhere!!
// react-redux re-renders the component when the new props are passed and the ownProps is passed as second argument to
// mapDispatchToProps function!! but it will not re-render even if props change when ownProps is not passed!
const mapDispatchToProps = (dispatch) => ({
  checkUserAuthState: () => dispatch(checkUserAuthStateStart()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
