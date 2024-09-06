import React from "react";
import { FaCopy } from "react-icons/fa";

const PasswordHistory = ({ copiedPassword, onCopy, onClickbgChange, highlightedIndex }) => {
  const handleCopyClick = (pass, index) => {
    onCopy(pass, index)
    onClickbgChange(pass, index);


  };

  return (
    <div className="max-w-sm shadow-lime-100 shadow-md m-auto mb-6 max-h-full mt-10 border rounded-xl w-full p-4 bg-slate-950">
      <h1 className="text-center m-4 bg-cyan-500/65 font-medium border rounded-lg p-2 border-blue-300 shadow-sm shadow-white text-xl">
        Last Copied Passwords History
      </h1>
      <div className="overflow-hidden">
        <ul className="overflow-y-auto scrollbar-hide max-h-48">
          {copiedPassword.map((pass, index) => (
            <div className="relative flex items-center" key={index}>
              <li
                className={`relative text-left m-2 w-full overflow-hidden font-semibold border rounded-lg p-2 border-blue-300 shadow-sm shadow-white text-neutral-50 text-xl h-12 flex items-center ${highlightedIndex === index ? 'bg-blue-500/35' : ''}`}
              >
                {pass}
              </li>
              <button
                onClick={() => handleCopyClick(pass, index)}
                className="bg-orange-600 hover:bg-orange-600/75 rounded-lg p-2 ml-2 h-12 flex items-center border z-10"
              >
                <FaCopy />
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordHistory;
