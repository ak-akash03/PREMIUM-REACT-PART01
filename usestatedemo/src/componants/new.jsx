import React from "react";
import { useState } from "react";

function New() {
  let [myObj, setmyObj] = useState({
    name: "Akash",
    age: 20,
    course: "Bca"
  });
  const changeName = () => {
     
      setmyObj({ ...myObj, name:"Akash Rathod"})

  }
  return (
    <>
      <h3>
        Name: {myObj.name} & Age: {myObj.age} & Degree: {myObj.course}
      </h3>
      <button onClick={changeName}>Update</button>
    </>
  );
}

export default New;
