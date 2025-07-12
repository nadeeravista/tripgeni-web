import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">
          <p>Login</p>
        </div>
        <div className="login__fields">
          <div className="login__fields__username">
            <input type="text" name="" id="" placeholder="Username" />
          </div>
          <div className="login__fields__password">
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <div className="login__fields__forgot">
            <Link className="login__link">Forgot Your Password?</Link>
          </div>
        </div>
        <div className="login__button">
          <button>Login</button>
        </div>
        <div className="login__contact">
          <div className="login__contact__container">
            <p>Don't Have an account yet ?</p>
            <Link to="/contact" className="login__link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
