import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Name</span>
        <div className="chat-icons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input></Input>
    </div>
  );
};

export default Chat;
