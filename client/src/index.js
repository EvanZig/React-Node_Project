import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/myCss.css";
import MyRoutes from "./MyRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);
