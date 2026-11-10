"use client";

import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

export function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<Todo>({ id: "", title: "" });

  return (
    <div id="wd-context-todo-list">
      <h3>Todo List</h3>
      <input
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="New todo"
        className="mb-2 me-2 rounded border border-neutral-300 px-3 py-1.5"
        id="wd-context-todo-title"
      />
      <button
        type="button"
        onClick={() => {
          if (!todo.title.trim()) return;
          addTodo(todo.title);
          setTodo({ id: "", title: "" });
        }}
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        id="wd-context-todo-add-click"
      >
        Add
      </button>
      <button
        type="button"
        disabled={!todo.id}
        onClick={() => {
          updateTodo(todo);
          setTodo({ id: "", title: "" });
        }}
        className="rounded bg-yellow-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
        id="wd-context-todo-update-click"
      >
        Update
      </button>
      <ul className="mt-2">
        {todos.map((t) => (
          <li key={t.id} className="mb-1 flex items-center gap-2">
            <span className="flex-1">{t.title}</span>
            <button
              type="button"
              onClick={() => setTodo(t)}
              className="rounded bg-blue-600 px-2 py-1 text-xs font-medium text-white"
              id={`wd-context-todo-edit-${t.id}`}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => deleteTodo(t.id)}
              className="rounded bg-red-600 px-2 py-1 text-xs font-medium text-white"
              id={`wd-context-todo-delete-${t.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
