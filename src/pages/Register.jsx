import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      try {
        await updateProfile(res.user, { displayName: username });
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          username,
          email,
        });
        await setDoc(doc(db, "user-chats", res.user.uid), {});
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="brand">TangTalks</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button>Sign Up</button>
          {err && <span> Something Went Wrong!</span>}
        </form>
        <p>
          Already Have An Account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
