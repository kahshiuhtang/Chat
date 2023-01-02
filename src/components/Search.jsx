import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find A User"></input>
      </div>
      <div className="user-chat">
        <img src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"></img>
        <div className="user-chat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
