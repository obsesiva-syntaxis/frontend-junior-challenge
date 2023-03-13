import { createContext } from "react";
import { useAppSelector } from "redux/store";
import { useTodo } from "hooks/useTodo";
import { TodoEssence, TodoItemContextEssence } from "interfaces/TodoEssences";
import "./TodoItem.scss";

interface TodoItemEssence {
  children?: JSX.Element | JSX.Element[];
  todo: TodoEssence;
}

export const TodoItemContext = createContext({} as TodoItemContextEssence);
const { Provider } = TodoItemContext;

const TodoItem = ({ todo, children }: TodoItemEssence) => {
  const { checked } = useAppSelector(state => state.todos.find(element => element.id === todo.id));
  const { onCheck, onDelete } = useTodo({ todo });

  return (
    <Provider value={{
      label: todo.label,
      onCheck,
      checked,
      onDelete,
    }}>
      <div className="todo-list-item" 
        style={{ 
          backgroundColor: `${checked ? '	#198754' : 'white'}`, 
          color: `${checked ? 'white' : 'black'}` 
        }}>
        { children }
      </div>
    </Provider>
  )
}

export default TodoItem;