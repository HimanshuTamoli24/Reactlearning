import React, { useState, useEffect } from "react";
import App1 from "../App1";
function App() {
  const [num, setNum] = useState(1);
  const [action, setAction] = useState("");

  const onAddClick = () => {
    setNum((prevNum) => prevNum + 1);
    setAction("add");
  };

  const onRemoveclick = () => {
    setNum((prevNum) => prevNum - 1);
    setAction("remove");
  };

  useEffect(() => {
    if (action) {
      if (action === "add") {
        alert("You pressed the Add button");
      } else if (action === "remove") {
        alert("You pressed the Remove button");
      }
      setAction("");
    }
  }, [action]);

  return (
    <>
      <div>
        <h1> Himanshu Tamoli: {num} </h1>
        <button onClick={onAddClick}>Add num</button>
        {num !== 0 && <button onClick={onRemoveclick}>Remove num</button>}
      </div>

      <App1/>
    </>
  );
}

export default App;
