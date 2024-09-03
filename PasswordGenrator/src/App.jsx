import React from "react";
import { useCallback, useState, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    const pass=''
    const str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    const num = '1234567890'

    
  }
    , [])
  return (
    <>
      <div className="w-full h-screen flex justify-center flex-col items-center bg-slate-950">

        <div className="max-w-lg shadow-lime-100 shadow-md  border rounded-xl w-full justify-center items-center ">
          <h1 className="text-center m-10 text-4xl text-neutral-50">
            Password Genrator
          </h1>
          <div className=" flex justify-center m-4">
            <input type="text" className="bg-gray-800/95 p-2 rounded-md  w-full border" placeholder="Password generator" />
            <button className="bg-orange-600 rounded-md flex-grow w-1/4  p-2 ml-2  border font-bold">Copy</button>
          </div>
          <div className="flex justify-center items-center flex-wrap mt-12 mb-8 ml-4 gap-6 ">
            <div className=" flex justify-center gap-x-2 ">
              <input type="range" className="" />
              <label htmlFor="range" className="text-white text-md items-center font-semibold"> Length:4</label>
            </div>
            <div className="flex gap-x-4 m-2">     <div className=" flex justify-center gap-x-2 ">
              <input type="checkbox" />
              <label htmlFor="range" className="text-white text-md items-center font-semibold">Numbers</label>
            </div>
              <div className="   flex  items-center gap-x-2">
                <input type="checkbox" />
                <label htmlFor="range" className="text-white text-md font-semibold">Characters</label>
              </div></div>

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
