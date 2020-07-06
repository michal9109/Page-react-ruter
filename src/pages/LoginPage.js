import React from "react";
import "../styles/login.css";

const LoginPage = () => {
  return (
    <div className="page__login">
      <h3>Sign Into Next</h3>
      <label htmlFor="">Login</label>
      <input type="text" />
      <label htmlFor="">Password</label>
      <input type="password" />
      <button>SIGN IN</button>
    </div>
  );
};

export default LoginPage;
