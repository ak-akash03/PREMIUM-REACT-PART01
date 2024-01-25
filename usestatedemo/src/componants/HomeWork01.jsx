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
      settext(text.toLocaleLowerCase())
  } 


  return (
    <>
      <div>HomeWork</div>
      <br />
      <textarea
        name="textarea"
        id="text"
        value={text}
        cols="35"
        rows="5"
        onChange={handleOnchange}
      ></textarea>
      <br />
      <button onClick={UpperCase}>UpperCase </button>
      <button onClick={LowerCase}>LowerCase </button>
    </>
  );
}

export default HomeWork01;