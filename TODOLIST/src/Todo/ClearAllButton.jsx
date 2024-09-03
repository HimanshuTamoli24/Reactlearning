import React from 'react';
import { MdDeleteSweep } from 'react-icons/md';

const ClearAllButton = ({ handleClearAll }) => (
    <button
        className="text-white border-2 items-center justify-center border-solid rounded-full border-[#853fcab5] m-3 bg-blue-900 text-base sm:text-xl font-bold py-2 px-4"
        onClick={handleClearAll}
    >
        <span className="flex gap-2 sm:gap-4 items-center">
            Clear All
            <MdDeleteSweep className="text-xl sm:text-3xl" />
        </span>
    </button>
);

export default ClearAllButton;
