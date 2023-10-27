import React from "react";
import "./style.css";
export default function Nav(params) {
  return (
    <div>
      <nav className="nav-bar">
        <h2 className="text">
          {" "}
          <span className="emoji-icon"> ♋️</span>Meme Generator
        </h2>
        <p>React Course - Project 3</p>
      </nav>
    </div>
  );
}
