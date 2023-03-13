import { useTodo } from 'hooks/useTodo';
import { ChangeEvent, FormEvent, useState } from 'react';
import './TodoForm.scss';

const TodoForm = () => {
  const [label, setlabel] = useState('');
  const { onCreate } = useTodo({});

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setlabel(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(label);
    setlabel('');
  }

  return (
    <div className="make-todo">
      <div className="make-todo__container">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Enter new to do..." name="label" value={label} onChange={onChange} />-
          <button className={ label.length > 0 ? 'btn' : 'btn-disabled' } disabled={ label.length > 0 ? false : true }>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default TodoForm;
