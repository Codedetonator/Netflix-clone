import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./gobal-styles";
// eslint-disable-next-line
import { firebase } from './lib/firebase.prod' 
import { FirebaseContext } from './context/firebase'
ReactDOM.render(
  <>
  <FirebaseContext.Provider value={{ firebase }}> 
    <GlobalStyles />
    <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
