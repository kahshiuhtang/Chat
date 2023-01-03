import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="brand">TangTalks</span>
      <div className="user">
        <img
          src="https://www.wikihow.com/images/thumb/7/70/Draw-Yourself-As-a-Manga-Girl_Boy-Step-12.jpg/aid766412-v4-1200px-Draw-Yourself-As-a-Manga-Girl_Boy-Step-12.jpg"
          alt="Profile"
        />
        <span>{currentUser.username}</span>
        <button onClick={() => signOut(auth)}>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
