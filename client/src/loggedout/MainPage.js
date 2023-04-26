import React from "react";
import Login from "./Login";
import Register from "./Register";

export default function MainPage() {
  return (
    <>
      <div className="RegLoginAlign">
        <Login />
        <Register />
      </div>
    </>
  );
}
