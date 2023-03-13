import { TodoEssence } from "interfaces/TodoEssences"
import { useAppDispatch, useAppSelector } from "redux/store";
import { createTodo, deleteTodo, updateTodo } from "redux/todos/todosThunks";

interface useTodoEssence {
  todo?: TodoEssence;
}

export const useTodo = ({ todo }: useTodoEssence) => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(state => state.todos)

  const onCreate = (label: string) => {
    dispatch(createTodo({
      id: (+todos.length) + 1,
      label,
      checked: false,
    }));
  }

  const onCheck = () => {
    if (!todo.checked) {
      dispatch(updateTodo({
        id: todo.id,
        body: {
          ...todo,
          checked: true
        }
      }));
    } else {
      dispatch(updateTodo({
        id: todo.id,
        body: {
          ...todo,
          checked: false
        }
      }));
    }
  }

  const onDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  return {
    onCheck,
    onDelete,
    onCreate
  }
}