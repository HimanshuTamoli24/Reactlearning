import React, { useState } from "react";

// Define a separate Todo component
function TodoItem({ title, description }) {
  return (
    <>
      <li
        style={{
          background: "yellow",
          color: "black",
          border: "solid",
          margin: "30px",
        }}
      >
        {title}
      </li>
      <li
        style={{
          background: "yellow",
          color: "black",
          border: "solid",
          margin: "30px",
        }}
      >
        {description}
      </li>
    </>
  );
}

function App1() {
  // State for the todo list
  const [todos, setTodos] = useState([
    { title: 1, description: "one" },
    { title: 2, description: "two" },
    { title: 3, description: "three" },
  ]);

  return (
    <div>

        <div>hello</div>
      <ul>
        {todos.map((todo, index) => (
          // Render each TodoItem with a unique key
          <TodoItem
            key={index}
            description={todo.description}
            title={todo.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default App1;
