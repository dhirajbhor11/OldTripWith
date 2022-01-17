import React from "react";
import "./Login.scss";
import LoginOption from "../../components/LoginOption/LoginOption";

export default function Login() {
  return (
    <>
      <div className="inputs_container">
        <h2 className="loginText">LOGIN</h2>
        <div className="inputs">
          <label htmlFor="userName" className="label">
            USERNAME / EMAIL / MOBILE
          </label>
          <input type="text" id="userName" name="userName" className="input" />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input"
          />
        </div>
        <div className="cta">
          <button className="loginCta">LOGIN</button>
          <button className="signupCta">SIGNUP</button>
        </div>
        <div className="loginOptions">
          <LoginOption />
        </div>
      </div>
    </>
  );
}
