import React, { useContext, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
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
  const handleClick = async () => {
    //check whether group exists
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chat", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        await updateDoc(doc(db, "user-chats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            username: user.username,
          },
          [combinedId + ".data"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "user-chats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            username: currentUser.username,
          },
          [combinedId + ".data"]: serverTimestamp(),
        });
      }
    } catch (err) {
      setErr(true);
      console.log(err);
    }
    setUser(null);
    setUsername("");
  };
  //Need to change
  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="Find A User"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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
