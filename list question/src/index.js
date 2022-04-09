import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Redux Thunk Middleware
// import applyMiddleware from 'redux';
// import thunk from 'redux-thunk';
// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
