import React, { useEffect, useState } from 'react';
import Header from './TodoHeader';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';
import ClearAllButton from './ClearAllButton';
import '@fontsource/roboto';
import '../Todo/Todo.css';

function Todo() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);
  const [date, setdate] = useState('');
  const [edit, setEdit] = useState(false);

  const handleInputChanges = (value) => {
    setInput(value);
  };

  const handleFormChanges = (event) => {
    event.preventDefault();
    const trimmedInput = input.trim();
    if (trimmedInput === '' || task.includes(trimmedInput)) {
      setInput('');
      return;
    }
    setTask((prevTask) => [...prevTask, trimmedInput]);
    setInput('');
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleDeleteTask = (index) => {
    setTask((prevTask) => prevTask.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      const currentDate = time.toLocaleDateString();
      const currentTime = time.toLocaleTimeString();
      setdate(`${currentDate}  ||  ${currentTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#340068] to-[#4E0250] min-h-screen text-center flex flex-col items-center justify-start">
      <Header date={date} />
      <TodoForm input={input} handleInputChanges={handleInputChanges} handleFormChanges={handleFormChanges} />
      <section className="w-full max-w-md px-4">
        <ul>
          {task.map((current, index) => (
            <TodoItems key={index} task={current} index={index} handleDeleteTask={handleDeleteTask}  handleEditTodo={handleEditTodo}/>
          ))}
        </ul>
      </section>
      <ClearAllButton handleClearAll={handleClearAll} />
    </section>
  );
}

export default Todo;
