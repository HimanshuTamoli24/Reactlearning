import React from "react";

function Square(props) {
  return (
   <>
    <div
      onClick={props.onClick}
      className="square"
      style={{
        width: "99px",
        height: "100px",
        backgroundColor: "#29617338",
        backdropFilter: "blur(1px)",
        padding: "1rem",
        margin: "0.1rem",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{props.value}</h1>
    </div></>
  );
}

export default Square;
