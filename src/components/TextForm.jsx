import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text.");

  const UpClick = () => {
    console.log("UPClick was pressed.");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const lowClick = () => {
    console.log("LowClick was pressed.");
    let newText = text.toLowerCase();
    setText(newText);
  }



  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value)
  }

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="myBox">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>


        <button className="button" onClick={UpClick} >
          Change to UpperCase
        </button>

        <button className="button" onClick={lowClick} >
          Change to LowerCase
        </button>

      </div>
    </>
  );
}
