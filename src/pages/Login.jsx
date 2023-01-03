import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="brand">TangTalks</span>
        <span className="title">Login</span>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button onSubmit={handleSubmit}>Log In</button>
        </form>
        <p>
          Don't Have An Account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
