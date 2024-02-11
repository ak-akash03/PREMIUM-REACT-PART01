import React, { useState, useContext } from "react";
import UserContext from "../context/context";
function Login() {
  return (
    <>
      <div>Login</div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      
    </>
  );
}

export default Login;
