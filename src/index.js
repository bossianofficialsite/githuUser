import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Main />);

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
