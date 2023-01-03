import React, { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("displayname", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code == "Enter" && handleSearch();
  };
  const handleClick = () => {};
  //Need to change
  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Find A User"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      {err && <p> User Not Found</p>}
      {user && (
        <div className="user-chat" onClick={handleClick}>
          <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"></img>
          <div className="user-chat-info">
            <span>Jane</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
