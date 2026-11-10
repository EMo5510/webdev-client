"use client";

import { createContext, useContext } from "react";

export type Todo = { id: string; title: string };

export type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextValue | null>(null);

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodoListProvider");
  }
  return value;
}
