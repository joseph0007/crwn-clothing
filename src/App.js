import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.page.jsx";
import Shop from "./pages/shoppage/shoppage.page";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInPage from "./pages/signpage/signpage.component";
import { auth, createUserDocDB } from "./utils/firebase/firebase.utils";

/**
 * a common issue with client side rendering was the issue of routing as opposed to server side rendering where we render the
 * page on the server side and send the new html page to the client.
 * there was no way of routing and constructing url endpoints to hit different pages because we were not relying on server anymore
 * to render the html but instead the client!!
 * but this issue was solved with client side routing which useses something that was build into the browser to route!!
 */

const Hats = (props) => (
  <div>
    {console.log(props)}
    <h1>Hats</h1>
  </div>
);

/**
 * Switch component just checks for the route inside of it and renders the first component that matches the url endpoint and ignores the
 * rest of the route and thus solving the issue of multiple components getting rendered due to all the route getting hit!!
 *
 */

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // create new user
        const userDocRef = await createUserDocDB(user);

        // using the snapShot method which gives us both the data and the id
        // we can call the data() method on the docRef to get the data in the JSON format and the id can be
        // found on the snapShot object!!
        userDocRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: user,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
