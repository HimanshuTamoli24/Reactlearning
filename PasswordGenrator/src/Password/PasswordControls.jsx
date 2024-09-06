import React from "react";

const PasswordControls = ({ length, setLength, numberAllowed, setNumberAllowed, characterAllowed, setCharacterAllowed, onGenerate }) => (
  <div className="flex justify-center items-center flex-wrap mt-12 mb-8 ml-4 gap-6">
    <div className="flex justify-center gap-x-2">
      <input
        type="range"
        min={1}
        max={32}
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
      />
      <label htmlFor="range" className="text-white text-md items-center font-semibold"> Length: {length}</label>
    </div>
    <div className="flex gap-x-4 m-2">
      <div className="flex justify-center gap-x-2">
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="range" className="text-white text-md items-center font-semibold">Numbers</label>
      </div>
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={characterAllowed}
          onChange={() => setCharacterAllowed((prev) => !prev)}
        />
        <label htmlFor="range" className="text-white text-md font-semibold">Characters</label>
      </div>
    </div>
    <button
      onClick={onGenerate}
      className="shadow-sm hover:bg-blue-700/60 hover:scale-105 shadow-slate-300 w-auto m-auto p-2 border font-semibold bg-blue-700/90 rounded-md"
    >
      Password Generator
    </button>
  </div>
);

export default PasswordControls;