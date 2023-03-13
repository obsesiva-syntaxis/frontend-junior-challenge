import { useContext } from 'react';
import { TodoItemContext } from '../TodoItem';
import './TodoItemLabel.scss';

export const TodoItemLabel = () => {
    const { label } = useContext( TodoItemContext );
    return (
        <div className="todo-item-label">{ label }</div>
    )
}