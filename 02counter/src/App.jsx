import { useState } from "react";

import "./App.css";

function App() {
  // Define state variable for counter
  const [counter, setCounter] = useState(0);

  // Function to increment counter with limits
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  // Function to decrement counter with limits
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>chai or code</h1>
      <h1>counter value: {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
