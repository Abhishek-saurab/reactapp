import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("Button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text converted into uppercase','success');
  };

  const handleLoClick = () => {
    // console.log("Button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text converted into lowercase','success')
  };

  const handleClrClick = () => {
    setText("");
    props.showAlert('Text is removed','success')
  };

  const handleToCopy = () => {
    let stext = document.getElementById("myBox");
    stext.select();
    navigator.clipboard.writeText(stext.value);
    props.showAlert('Text is copied','success')
  };

  return (
    <>
      <div
        className="conatainer"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="13"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Convert to Uppercae
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
            Convert to Uppercae
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleClrClick}
          >
            Clear
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleToCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="conatainer2"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <h2>Time taken to read text</h2>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>No. of Sentences</h2>
        <p>{text.split(".").length - 1} sentences</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Please Enter Anything in the TextArea'}</p>
      </div>
    </>
  );
}
