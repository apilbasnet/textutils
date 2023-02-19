import "../App.css";
import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const UpClick = () => {
    // console.log("UPClick was pressed.");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const lowClick = () => {
    // console.log("LowClick was pressed.");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const clearClick = () => {

    let newText = ("");
    setText(newText);
  }



  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value)
  }

  const copyToClipboard = async () => {

    await navigator.clipboard.writeText(text);

  }

  let sentence = () => {

  }

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))

  }





  return (
    <>
      <div className="myBox">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          style={{ backgroundColor: props.theme === "dark" ? "#25292d" : "whitesmoke" }}
        ></textarea>

        <div className="buttons"  >
          <button className="button mx-2 " onClick={UpClick} >
            Change to UpperCase
          </button>

          <button className="button mx-2" onClick={lowClick} >
            Change to LowerCase
          </button>

          <button className="button mx-2" onClick={clearClick} >
            Clear
          </button>

          <button className="button mx-2" onClick={copyToClipboard} >
            Copy to Clipboard
          </button>

          <button className="button mx-2" onClick={removeExtraSpaces} >
            Remove extra spaces
          </button>

        </div>

      </div>



      <div className="preview my-3">
        <h1>Your Text Summary</h1>

        <p> <li>{text.split(" ").length} : words length and {text.length} : characters length </li></p>
        <p> <li>{0.008 * text.split(" ").length} : minutes read </li></p>


        <p> <li> {sentence = text.split(/[.?!]/).length - 1} : Number of sentences </li></p>

        <h2>Your text preview</h2>
        <p>{text.length > 0 ? text : "Enter your text"}</p>




      </div>



    </>
  );
}
