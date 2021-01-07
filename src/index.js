import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        {/* not a good practise to mount more than one element onto div#root */}
        {/* <App /> */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
