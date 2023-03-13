import { useAppSelector } from "redux/store";
import "./TodoResults.scss";

const TodoResults = () => {
  const todos = useAppSelector( state => state.todos);

  return (
    <div className="todo-results">
      Done: { todos.filter( todo => todo.checked ).length }
    </div>
  );
};

export default TodoResults;
