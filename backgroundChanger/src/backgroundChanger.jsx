import React, { useState } from "react";

function BackChanger() {
  const [Color, setColor] = useState("olive");
  return (
    <>
        <div className="w-full h-screen duration-200"
        style={{backgroundColor:Color}}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button onClick={() => setColor("red")} className="px-4 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={() => setColor("green")}  className="px-4 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
                    <button onClick={() => setColor("blue")}  className="px-4 outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
                </div>
            </div>

        </div>
    </>
  );
}

export default BackChanger;
  