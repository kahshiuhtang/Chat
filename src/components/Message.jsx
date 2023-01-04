import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" }, [message]);
  });
  return (
    <div
      ref={ref}
      className={`message ${message.senderID === currentUser.uid && "owner"}`}
    >
      <div className="message-info">
        <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"></img>
        <span>Just Now</span>
      </div>
      <div className="message-content">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
