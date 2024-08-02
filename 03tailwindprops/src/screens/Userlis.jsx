import React from "react";
import Usercard from "../components/Usercard";
function Userlis() {
  // Sample data array
  let data = [
    { name: "arnav", age: 1, rollno: 11 },
    { name: "arnav1", age: 2, rollno: 22 },
    { name: "arnav2", age: 3, rollno: 33 },
    { name: "arnav3", age: 4, rollno: 44 },
  ];

  return (
    <div>
      {data.map(({ name, age, rollno }) => (
        <div>
          <Usercard name={name} age={age} />
        </div>
      ))}
    </div>
  );
}

export default Userlis;
