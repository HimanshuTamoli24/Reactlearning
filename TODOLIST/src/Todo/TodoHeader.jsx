import React from 'react'

const TodoHeader = ({ date }) => (
    <header className="text-center flex flex-col min-h-[25vh] justify-center gap-2 w-full">
        <h1 className="text-white text-5xl font-roboto italic">Todo List</h1>
        <div className="text-2xl font-semibold text-[#e2d9ea79] font-roboto mt-10">{date}</div>
    </header>
);
export default TodoHeader