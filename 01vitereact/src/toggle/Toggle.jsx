import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`parent ${toggle ? "toggleon" : "toggleoff"}`}>
      <div className={`circle ${toggle ? "toggleon" : "toggleoff"}`}>
        <span className="name" onClick={toggleState}>
          {toggle ? "on" : "off"}
        </span>
      </div>
    </div>
  );
}
 
export default Toggle;
