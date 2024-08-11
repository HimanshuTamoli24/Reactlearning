import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "todomsg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}, // Fixed typo 'togole' to 'toggle'
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider; // Fixed to correctly export TodoProvider
