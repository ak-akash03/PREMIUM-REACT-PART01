import React, { useState } from "react";

function TextForm(props) {
  function convertToUpeperCase() {
//     console.log("clicked to button");
//     console.log(upperCase);
    let newText = upperCase.toUpperCase();
    setUpperCase(newText);
  }

  function onChangeFun(event) {
//     console.log("on change");
    setUpperCase(event.target.value);
  }

  const [upperCase, setUpperCase] = useState("akash");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={upperCase}
          onChange={onChangeFun}
        ></textarea>
      </div>
      <button onClick={convertToUpeperCase} className="btn btn-primary">
        convert to upperCase
      </button>
      {/* <button className="btn btn-primary">convert to lowerCase</button>
      <button className="btn btn-primary">convert to Reset</button> */}
    </>
  );
}

export default TextForm;
