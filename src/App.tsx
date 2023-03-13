import { useEffect } from "react"; // https://reactjs.org/docs/getting-started.html
import { useAppDispatch } from "redux/store"; // https://redux.js.org/introduction/getting-started
import { ToastContainer } from 'react-toastify'; //https://fkhadra.github.io/react-toastify/introduction/
import { getTodos } from "redux/todos/todosThunks";
import ToDoPage from "pages/ToDoPage";
import 'react-toastify/dist/ReactToastify.css';
import './styles/index.scss';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
  });
  return (
    <div className="root">
      <ToDoPage />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
