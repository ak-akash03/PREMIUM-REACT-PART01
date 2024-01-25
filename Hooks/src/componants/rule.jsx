import React, { useState } from "react";

function Rule() {
  const [value, setValue] = useState("theproteam ");

  return <div>{value}</div>;
}

export default Rule;