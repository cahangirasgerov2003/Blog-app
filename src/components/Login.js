import "./login.css";

import React from "react";

import { login } from "../actions/authActions";

const Login = () => {

  return (
    <div>
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
