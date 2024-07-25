import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card"; // Ensure the import matches the filename and export

let myobject1 = {
  name: "arnav",
  age: "19",
};

function App() {
  return (
    <>
      <Card channel=" chao code " test={myobject1} />
      =

    </>
  );
}

export default App;
