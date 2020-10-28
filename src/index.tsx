import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MainHandler } from "./pages/MainHandler";
import { store } from "./store";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="App">
        <MainHandler />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
