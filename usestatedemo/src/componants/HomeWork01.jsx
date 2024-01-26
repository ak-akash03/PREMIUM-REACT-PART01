import React from "react";
import { useState } from "react";

function HomeWork01() {
  const UpperCase = () => {
    console.log("hello Ak");
    console.log(text);

    settext(text.toLocaleUpperCase());
  };
  const handleOnchange = (event) => {
    settext(event.target.value);
  };

  const [text, settext] = useState("second");

  const LowerCase = () => {
    settext(text.toLocaleLowerCase());
  };

  const [toggleText, settoggleText] = useState("Enable Dark Mode");

  const [darkObj, setDarkObj] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const toggleDarkMode = () => {
    if (darkObj.color == "white") {
      setDarkObj({
        color: "black",
        backgroundColor: "white",
      });
      settoggleText("Enable Dark Mode")
    } else {
      setDarkObj({
        color: "white",
        backgroundColor: "black",
      });
      settoggleText("Enable Light Mode")
    }
  };

  return (
    <>
      <div className="container" style={darkObj}>
        <div style={darkObj}>HomeWork</div>
        <br />
        <textarea
          style={darkObj}
          name="textarea"
          id="text"
          value={text}
          cols="35"
          rows="5"
          onChange={handleOnchange}
        ></textarea>
        <br />
        <button style={darkObj} onClick={UpperCase}>
          UpperCase{" "}
        </button>
        <button style={darkObj} onClick={LowerCase}>
          LowerCase{" "}
        </button>
        <button style={darkObj} onClick={toggleDarkMode}>
          {toggleText}
        </button>
      </div>
    </>
  );
}

export default HomeWork01;
