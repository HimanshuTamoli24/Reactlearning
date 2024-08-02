import React from "react";
import Nontitlr from "../components/Nontitlr";
import Detail from "../components/Detail";
import Register from "../components/Register.jsx";
import Userlis from "./Userlis.jsx";
function About() {
  // Correct function component naming and props usage
  return (
    <div>
      {/* <Nontitlr name="node js" />
      <Nontitlr name="node js" />
      
      <Detail name="hello" classs="book" /> */}

      <Register/>
      <Userlis/>
    </div>
  );
}

export default About;
