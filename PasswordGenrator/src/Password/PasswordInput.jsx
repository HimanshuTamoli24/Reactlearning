import React, { forwardRef } from "react";

const PasswordInput = forwardRef(({ password, onCopy }, ref) => (
  <div className="flex justify-center m-4">
    <input
      readOnly
      ref={ref}
      type="text"
      className="bg-gray-800/95 p-2 text-white rounded-md w-full border"
      placeholder="Password generator"
      value={password}
    />
    <button
      onClick={() => onCopy(password)}
      className="hover:bg-orange-600/80 bg-orange-600 rounded-md flex-grow w-1/4 p-2 ml-2 border font-bold"
    >
      Copy
    </button>
  </div>
));

export default PasswordInput;