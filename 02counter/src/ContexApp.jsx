import React, { useState } from "react";
import Navb from "../src/Component/Navb";

import { userContext } from "./Context/context";
function ContexApp() {
  const [counter, setCounter] = useState(0);
  return (
    <userContext.Provider value={counter}>
      <div>
        <div>
          Number:{counter}
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            ADD button
          </button>
        </div>

        <Navb />
      </div>
    </userContext.Provider>
  );
}

export default ContexApp;
