import React from "react";
import { FaCopy } from "react-icons/fa";

const PasswordHistory = ({ copiedPassword, onCopy }) => (
  <div className="max-w-sm shadow-lime-100 shadow-md m-auto mb-6 max-h-full mt-10 border rounded-xl w-full p-4">
    <h1 className="text-center m-4 bg-cyan-500/65 font-medium border rounded-lg p-2 border-blue-300 shadow-sm shadow-white text-xl">
      Last Copied Passwords History
    </h1>
    <div className="overflow-hidden">
      <ul className="overflow-y-auto scrollbar-hide max-h-48 scrollbar-hide">
        {copiedPassword.map((pass, index) => (
          <div className="flex items-center" key={index}>
            <li className="text-left m-2 w-full overflow-hidden font-semibold border rounded-lg p-2 border-blue-300 shadow-sm shadow-white text-neutral-50 text-xl h-12 flex items-center scrollbar-hide">
              <span className="m-2 p-1">{index + 1}.</span>{pass}
            </li>
            <button
              onClick={() => onCopy(pass)}
              className="bg-orange-600 hover:bg-orange-600/80 rounded-lg p-2 ml-2 h-12 flex items-center border"
            >
              <FaCopy />
            </button>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default PasswordHistory;
