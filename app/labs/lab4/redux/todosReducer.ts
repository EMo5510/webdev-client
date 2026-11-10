import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ReduxTodo = { id: string; title: string };

const emptyTodo: ReduxTodo = { id: "-1", title: "Learn Mongo" };

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", title: "Learn HTML" },
      { id: "2", title: "Learn CSS" },
      { id: "3", title: "Learn JavaScript" },
    ] as ReduxTodo[],
    todo: emptyTodo,
  },
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: crypto.randomUUID(), title: action.payload });
      state.todo = emptyTodo;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ReduxTodo>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) todo.title = action.payload.title;
      state.todo = emptyTodo;
    },
    setTodo: (state, action: PayloadAction<ReduxTodo>) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;