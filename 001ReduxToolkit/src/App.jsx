import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Counter/CounterSlice";
import Navbar from "./Navbar";
import { useState } from "react";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />

      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <div>COUNTER NUM IS {count}</div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
