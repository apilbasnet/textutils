import React from "react";

export default function TextForm(props) {
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="myBox">
        <textarea className="form-control" id="myBox" rows="8"></textarea>
      </div>
    </>
  );
}
