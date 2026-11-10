import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo, updateTodo } from "./todosReducer";
import type { RootState } from "./store";

export default function ReduxTodosForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  const isEditing = todo.id !== "-1";
  return (
    <div id="wd-redux-todos" className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={() =>
          dispatch(isEditing ? updateTodo(todo) : addTodo(todo.title))
        }
      >
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
}
