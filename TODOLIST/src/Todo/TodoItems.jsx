import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const TodoItems = ({ task, index, handleDeleteTask, handleEditTodo }) => (
    <li
        key={index}
        className="flex overflow-auto items-center custom-line-through justify-between mb-2 p-2 rounded-2xl text-sm sm:text-lg font-bold border-2 border-solid border-[#30332E] bg-[#c59dec]"
    >
        <button className="border-[2px] border-solid border-black rounded-xl bg-green-500 p-1">
            <FaCheck />
        </button>
        <span className="flex-grow">{task}</span>
        <div className="flex gap-2">
            <button onClick={() => { handleEditTodo }} className="border-2 border-solid border-black bg-blue-500 rounded-full p-1  ">
                <MdEdit />
            </button>
            <button
                className="border-2 border-solid border-black bg-red-500 rounded-full p-1 "
                onClick={() => handleDeleteTask(index)}
            >
                <RxCross2 />
            </button>
        </div>
    </li>
);

export default TodoItems;
