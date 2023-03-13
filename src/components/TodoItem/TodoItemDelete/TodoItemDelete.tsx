import { useContext } from 'react';
import { TodoItemContext } from '../TodoItem';
import './TodoItemDelete.scss';

export const TodoItemDelete = () => {
    const { onDelete } = useContext( TodoItemContext );
    return (
        <div className="todo-item-delete">
          <button type="button" className="todo-list-item-delete" onClick={onDelete}> x </button>
        </div>
    )
}