import { Link } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIN = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("./");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("./");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/ajc/KHBQ4LE6CJGQRA6LIKISDCCVHE.jpg"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIN}
          >
            Sign In
          </button>
        </form>
        <p className="form__p">OR</p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};
export default Login;
