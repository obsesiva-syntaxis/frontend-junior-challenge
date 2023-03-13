import { useAppSelector } from 'redux/store';
import TodoForm from 'components/TodoForm';
import TodoResults from 'components/TodoResults';
import TodoItem, { TodoItemCheckbox, TodoItemDelete, TodoItemLabel } from 'components/TodoItem';
import './ToDoPage.scss';

const ToDoPage = () => {
    const todos = useAppSelector(state => state.todos);

    return (
        <main className="to-do-page">
            <header className="to-do-page__header">
                <TodoForm />
                <TodoResults />
            </header>
            <section className="to-do-page__body">
                <div className="list">
                    <span className="list-title">Things to do:</span>
                    <div className="list-content">
                        {
                            todos.length > 0 ? (
                                todos.map(task => (
                                    <TodoItem key={task.id} todo={task}>
                                        <TodoItemCheckbox />
                                        <TodoItemLabel />
                                        <TodoItemDelete />
                                    </TodoItem>
                                ))
                            ) : (
                                <div className="no-todos">
                                    <h1>Looks like you&apos;re absolutely free today!</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ToDoPage;