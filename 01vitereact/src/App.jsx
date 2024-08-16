import { useState } from "react";
import { letContext } from "./Context/Context"; // Named import
import Mainbar from "./Components/Mainbar";

function App() {
  const [data, setData] = useState(2);

  return (
    <letContext.Provider value={data}>
      <br />
      hello its my App.jsx file: {data}
      <br />
      <button
        onClick={() => {
          setData((prev) => prev + prev * prev);
        }}
      >
        click for squaring num
      </button>
      <Mainbar />
    </letContext.Provider>
  );
}

export default App;
