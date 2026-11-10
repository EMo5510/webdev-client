"use client";

import { useState, type ReactNode } from "react";
import { TodosContext, type Todo } from "./todosContext";

const initialTodos: Todo[] = [
  { id: "1", title: "Learn React Context" },
  { id: "2", title: "Avoid prop drilling" },
];

export function TodoListProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (title: string) =>
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }]);

  const updateTodo = (todo: Todo) =>
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));

  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}