import React from "react";

function RandomNumberGen() {

      let collectionOfNumber = [1,2,3,4,5,6,7,8,9]
      let value = "";
      for (let i = 0; i < 5; i++) {
            value += collectionOfNumber[i]
      }
      console.log(value);
  return (
    <>
      <div className="text-white bg-slate-500">
        <div>RANDOM NUMBER GENERATOR </div>
        <br />
        <div>
            <input type="text" name="text" id="text" value={value}/>
        </div>
        <br />
        <button className="btn">Generate Number</button>
      </div>
    </>
  );
}

export default RandomNumberGen;
