import { useContext } from 'react';
import { TodoItemContext } from '../TodoItem';
import './TodoItemCheckbox.scss';

export const TodoItemCheckbox = () => {
    const { onCheck, checked } = useContext( TodoItemContext );
    return (
        <div className="todo-item-checkbox">
            <input type="checkbox" checked={checked} onChange={onCheck} />
        </div>
    )
}
