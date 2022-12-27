import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function TextForm(props) {
  const [text, setText] = useState(""); // text a variable while setText is a function which update our text value. useState return 2 items. one is current data and other is updated function.
  // text = "new text"; // Wrong way to change the state
  // setText("new text");
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    // setText("You have clicked on handleUpClick");
    setText(newText);
    props.showAlert("Converted to UpperCase", "Success");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    // setText("You have clicked on handleUpClick");
    setText(newText);
    props.showAlert("Converted to LoweCase", "Success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "Success");
  };
  const handleFilterClick = () => {
    let newText = text.replace("Qazi", "Ahmad");
    setText(newText);
    props.showAlert("Filtered", "Success");
  };
  const handleStartWithClick = () => {
    let newText = text.startsWith("Ahmad");
    setText(newText);
    props.showAlert("Done", "Success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "Success");
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Done", "Success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div disabled={text.length === 0} className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}
            id="myBox"
            rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length >= 5} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleFilterClick}>
          Filter text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleStartWithClick}>
          Filter Startwith text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>
          Remove extraSpace
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}

// useState is a hook.
