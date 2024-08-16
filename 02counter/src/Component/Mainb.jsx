import React from "react";
import Buttonb from "./Buttonb";
import { userContext } from "../Context/context";
import { useContext } from "react";
function Mainb() {
  let count = useContext(userContext);
  return (
    <div>
      this is main and you can check your {count} here it is work or not
      <div>
        <Buttonb />
      </div>
    </div>
  );
}

export default Mainb;
