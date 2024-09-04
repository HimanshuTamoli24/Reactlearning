import React from "react";
import { useCallback, useState, useEffect, useRef } from "react";
import Copiedpassword from "./Copiedpassword";
import { FaCopy } from "react-icons/fa";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copiedPassword, setCopiedPassword] = useState([])
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*'
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length)
      pass += str.charAt(random)

    }
    setPassword(pass)


  }
    , [length, numberAllowed, characterAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator, numberAllowed, characterAllowed, setPassword, length])



  const copyPasswordToClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      navigator.clipboard.writeText(password)
    }
    setCopiedPassword((prev) => {
      const copied = [password, ...prev]
      const unique = Array.from(new Set(copied));
      return unique.slice(0, 10)
    })
  }
  return (
    <>
      <div className="w-full h-screen flex justify-start  flex-col items-center bg-slate-950">

        <div className="max-w-lg shadow-lime-100/25 shadow-2xl mt-28  border rounded-xl w-full justify-center   items-center  ">
          <h1 className="text-center m-10 text-4xl text-neutral-50">
            Password Genrator
          </h1>
          <div className=" flex justify-center m-4">
            <input readOnly ref={passwordRef} type="text" className="bg-gray-800/95 p-2 text-white rounded-md  w-full border" placeholder="Password generator" value={password} />
            <button onClick={copyPasswordToClipboard} className=" hover:bg-orange-600/80  bg-orange-600 rounded-md flex-grow w-1/4  p-2 ml-2  border font-bold">Copy</button>
          </div>
          <div className="flex justify-center items-center flex-wrap mt-12 mb-8 ml-4 gap-6 ">
            <div className=" flex justify-center gap-x-2 ">
              <input type="range" className="" min={1} max={32} value={length}
                onChange={(e) => setLength(parseInt(e.target.value))} />
              <label htmlFor="range" className="text-white text-md items-center font-semibold"> Length:{length}</label>
            </div>
            <div className="flex gap-x-4 m-2">     <div className=" flex justify-center gap-x-2 ">
              <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
              <label htmlFor="range" className="text-white text-md items-center font-semibold">Numbers</label>
            </div>
              <div className="   flex  items-center gap-x-2">
                <input type="checkbox" checked={characterAllowed} onChange={() => setCharacterAllowed((prev) => !prev)} />
                <label htmlFor="range" className="text-white text-md font-semibold">Characters</label>
              </div>
            </div>

            <button onClick={() => passwordGenerator()} className=" shadow-sm hover:bg-blue-700/60 hover:scale-105 shadow-slate-300 w-auto m-auto p-2 border font-semibold bg-blue-700/90 rounded-md ">Password Genrator</button>
          </div>

          <div className="max-w-sm shadow-lime-100 shadow-md m-auto mb-6  max-h-72 mt-28  border rounded-xl w-full  p-4  ">
            <h1 className="text-center m-4 bg-cyan-500/65 font-medium border rounded-lg p-2 border-blue-300 shadow-sm shadow-white  text-xl ">
              Last Copied Passwords History
            </h1>

            <div className="overflow-hidden">
              <ul className="overflow-y-auto scrollbar-hide  max-h-48  scrollbar-hide  ">
                {
                  copiedPassword.map((pass, index) => (<div className="flex items-center">
                    <li key={index} className="text-left m-2 w-full overflow-auto font-semibold border rounded-lg p-2 border-blue-300 shadow-sm shadow-white text-neutral-50 text-xl h-12 flex items-center scrollbar-hide">
                      <span className="m-2 p-1 ">{index + 1}</span>  {pass}                  </li>
                    <button onClick={copyPasswordToClipboard} className="bg-orange-600 hover:bg-orange-600/80 rounded-lg p-2 ml-2 h-12 flex items-center border ">
                      <FaCopy />
                    </button>
                  </div>))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );

}
export default App;

