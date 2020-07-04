import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom"
import thunk from "redux-thunk";
import App from "./components/App";
import Reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";


const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);