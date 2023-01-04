import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { ref } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
    } else {
      await updateDoc(doc(db, "chats", data.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          data: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "user-chats", currentUser.uid), {
      [data.chatID + ".lastMessage"]: {
        text,
      },
      [data.chatID + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "user-chats", data.user.uid), {
      [data.chatID + ".lastMessage"]: {
        text,
      },
      [data.chatID + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Attach} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
