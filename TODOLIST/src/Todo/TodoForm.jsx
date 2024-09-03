import React from 'react';

const TodoForm = ({ input, handleInputChanges, handleFormChanges }) => (
    <section className="w-full max-w-md px-4">
        <form onSubmit={handleFormChanges} className="flex items-center justify-between mt-4 mb-4">
            <input
                onChange={(event) => handleInputChanges(event.target.value)}
                value={input}
                type="text"
                placeholder="Add your text here"
                className="pl-4 pr-4 py-2 border-[#853fcab5] rounded-l-full border-solid border-black border-2 flex-grow text-base sm:text-lg placeholder:text-base sm:placeholder:text-sm"
            />
            <button
                className="text-white rounded-lg p-2 border-solid border-black border-[2px] bg-blue-900 text-base sm:text-xl font-bold py-2 px-4 ml-2"
                type="submit"
            >
                Add
            </button>
        </form>
    </section>
);

export default TodoForm;
