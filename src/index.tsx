import React from "react";
import ReactDOM from "react-dom";
import { MainHandler } from "./pages/MainHandler";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <MainHandler />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
