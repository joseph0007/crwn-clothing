import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor } from "./redux/store";

import store from "./redux/store";

// process.env.NODE_ENV = "development";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
        {/* not a good practise to mount more than one element onto div#root */}
        {/* <App /> */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
