import React, { useContext } from "react";
import { letContext } from "../Context/Context";

function Mainbar() {
  const square = useContext(letContext);

  return <div>the numberS always tend to :{square}</div>;
}

export default Mainbar;
