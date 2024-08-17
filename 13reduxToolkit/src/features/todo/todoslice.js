import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState, // Fixed typo here
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // updateTodo:(state,action)=>{
    //   state.todos = state.todos.filter((todo) => todo.id == action.payload);
    //   state.todos.innerHTml(input)

    // }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
