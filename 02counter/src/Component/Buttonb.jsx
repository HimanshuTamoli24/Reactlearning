import React from "react";

import { useContext } from "react";
import { userContext } from "../Context/context";
function button() {
  const count = useContext(userContext);
  return <div>here is number again :{count}</div>;
}

export default button;
