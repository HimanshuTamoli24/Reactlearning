import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteSweep, MdEdit } from "react-icons/md";
import '@fontsource/roboto';
import '../Todo/Todo.css'

function Todo() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [date, setdate] = useState('')
  const handleInputChanges = (value) => {
    setInput(value);
  };

  const handleFormChanges = (event) => {
    event.preventDefault();
    if (input.trim() === "" || task.includes(input)) {
      setInput("");
      return;
    }
    setTask((prevTask) => [...prevTask, input]);
    setInput("");
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleDeleteTask = (index) => {
    setTask((prevTask) => prevTask.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date()
      const currentDate = time.toLocaleDateString()
      const currentTime = time.toLocaleTimeString()
      setdate(`${currentDate}  ||  ${currentTime}`)
    }, 1000);
  }, [])

  return (
    <section className="bg-gradient-to-r 
    from-[#340068] to-[#4E0250] min-h-screen text-center  flex flex-col items-center justify-start">
      <header className="text-center  flex flex-col min-h-[25vh] justify-center gap-2  w-full">
        <h1 className="text-white   text-5xl font-roboto  italic ">Todo List</h1>
        <div className=" text-2xl  font-semibold  text-[#e2d9ea79]    font-roboto mt-10 ">  {date}</div>
      </header>
      <section className="min-w-80  ">
        <form
          onSubmit={handleFormChanges}
          className="flex flex-col  text-3xl justify-center mt-[15px] mb-[15px] p-3 w-full "
        >
          <div className="flex items-center">
            <input
              onChange={(event) => handleInputChanges(event.target.value)}
              value={input}
              type="text"
              placeholder="Add your text here"
              className="pl-4 pr-4 py-3 
              border-[#853fcab5] rounded-l-full border-solid border-black border-2 flex-grow w-full md:flex-grow placeholder:text-base sm:placeholder:text-2xl
                placeholder:bottom-2 placeholder:justify-start placeholder:align-bottom"
            />

            <button
              className="text-white  border-[#853fcab5] rounded-r-full bg-blue-900 text-xl font-bold py-4 px-4 min-w-36 md:w-auto"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
        <div>
          <section>
            <ul>
              {task.map((current, index) => (
                <li
                  key={index}
                  className="flex custom-line-through items-center justify-between m-1 p-2 pl-4 pr-4 py-3 rounded-2xl   text-xl font-bold
                  border-2 border-solid border-[#30332E] 
                  bg-[#c59dec]  flex-grow"
                >
                  <button className=" border-[2px] border-solid border-black rounded-xl bg-green-500  p-1">
                    <FaCheck />
                  </button>
                  {current}

                  <div className="flex  gap-2 ">
                    <button className=" border-2 border-solid border-black  bg-blue-500 rounded-full  p-1">
                      <MdEdit />
                    </button>
                    <button className=" border-2 border-solid border-black  bg-red-500 rounded-full  p-1" onClick={() => handleDeleteTask(index)}>
                      <MdDeleteSweep />
                    </button>


                  </div>
                </li>

              ))}
            </ul>
          </section>
          <button
            className="text-white border-2 border-solid rounded-full 
            border-[#853fcab5] m-3 bg-blue-900 text-xl font-bold p-3 min-w-36"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>
      </section>
    </section>
  );
}

export default Todo;
