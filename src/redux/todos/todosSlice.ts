import { createSlice } from '@reduxjs/toolkit';
import { TodoEssence } from 'interfaces/TodoEssences';
import { toastEmitter } from 'utils/toastEmitter';
import { createTodo, deleteTodo, getTodos, updateTodo } from './todosThunks';

interface TodosSliceEssence {
    loading: boolean;
    error: string;
    todos: TodoEssence[];
}

const initialState = {
    loading: false,
    error: '',
    todos: [{
        id: 0,
        label: '',
        checked: false
    }]
} as TodosSliceEssence;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //PENDING
        builder.addCase(getTodos.pending, (state) => { state.loading = true });
        
        //FULFILLED
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        });
        builder.addCase(createTodo.fulfilled, (state, { payload }) => { state.todos.push(payload) });
        builder.addCase(updateTodo.fulfilled, (state, { payload }) => { 
            state.todos.find(todo => todo.id === payload.id ).checked = payload.checked;
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload }) => { 
            state.todos = state.todos.filter( todo => todo.id !== payload);
        });

        //ERRORS
        builder.addCase(getTodos.rejected, () => toastEmitter('Error with get all TO DOS'));
        builder.addCase(createTodo.rejected, () => toastEmitter('Error when trying to save this TODO'));
        builder.addCase(updateTodo.rejected, () => toastEmitter('Error while attempting to accomplish this TODO.'));
        builder.addCase(deleteTodo.rejected, () => toastEmitter('Error when trying to delete this task.'));
    }
});

export default todosSlice.reducer;