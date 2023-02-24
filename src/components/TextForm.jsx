import "../App.css";
import { useState } from "react";
import React from "react";
import { element } from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const UpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success ")
  }

  const lowClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success ")
  }

  const clearClick = () => {

    let newText = ("");
    setText(newText);
    props.showAlert("Cleared all the text!", "success ")
  }



  const handleOnChange = (event) => {

    setText(event.target.value)
  }

  const copyToClipboard = async () => {

    await navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success ")

  }

  let sentence = () => {


  }

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!", "success ")

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
          style={{
            backgroundColor: props.mode === "dark" ? "#33383d" : "whitesmoke"
            , color: props.mode === "dark" ? "white" : "black"
          }}
        ></textarea>

        <div className="buttons"  >
          <button disabled={text.length === 0} className="button mx-2 " onClick={UpClick} >
            Change to UpperCase

          </button>

          <button disabled={text.length === 0} className="button mx-2" onClick={lowClick} >
            Change to LowerCase
          </button>

          <button disabled={text.length === 0} className="button mx-2" onClick={clearClick} >
            Clear
          </button>

          <button disabled={text.length === 0} className="button mx-2" onClick={copyToClipboard} >
            Copy to Clipboard
          </button>

          <button disabled={text.length === 0} className="button mx-2" onClick={removeExtraSpaces} >
            Remove extra spaces
          </button>

        </div>

      </div>



      <div className="preview my-3">
        <h1>Your Text Summary</h1>

        <p> <li>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} : words length and {text.length} : characters length </li></p>
        <p> <li>{0.008 * text.split(" ").length} : minutes read </li></p>


        <p> <li> {sentence = text.split(/[.?!]/).length - 1} : Number of sentences </li></p>

        <h2>Your text preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>




      </div>



    </>
  );
}
