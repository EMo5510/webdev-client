import { useSelector } from "react-redux";
import type { RootState } from "./store";
import ReduxTodosForm from "./ReduxTodosForm";
import ReduxTodoItem from "./ReduxTodosItem";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodosForm />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
