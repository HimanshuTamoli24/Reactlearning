import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalState = {
  todo: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initalState,
  reducers: {
},
addTodo: (state, action) => {},
removeTodo: (state, action) => {},
});
