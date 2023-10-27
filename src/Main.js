import React, { useState } from "react";
import MemeData from "./MemeData";
export default function Main() {
  const [meme1, mem2] = useState();
  const random = () => {
    const num = Math.floor(Math.random() * MemeData.length);
    mem2(MemeData[num].memeImage);
  };
  return (
    <div>
      <div id="form">
        {/* <input type="text" placeholder="Top text" name="text" />{" "}
        <input type="text" placeholder="Button text" name="text" />{" "} */}
        <button className="button" onClick={random}>
          Get a new meme image 🖼️
        </button>
      </div>
      {/*  */}

      <div className="meme-container">
        {" "}
        <img src={meme1} alt="" className="meme-class" />
      </div>
      <div className="information">
        {" "}
        <span class="material-symbols-outlined">error</span>
        <p>We been uploading memes from 6pm to 10pm!!</p>
      </div>
    </div>
  );
}
