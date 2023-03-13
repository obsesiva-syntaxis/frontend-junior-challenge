import { createAsyncThunk } from "@reduxjs/toolkit";
import { InputTodoEssence, patchEssence, TodoEssence } from "interfaces/TodoEssences";
import { AxiosAdapter } from "utils/AxiosAdapter";

const http = new AxiosAdapter();

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
    const data = await http.get<TodoEssence[]>('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos');
    return data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ( { id, body }: patchEssence ) => {
    const data = await http.patch(id, 'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos', body );
    return data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async ( id: number ) => {
    const data = await http.delete(id, 'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos');
    return data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async ( body: InputTodoEssence ) => {
    const data = await http.post('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos', body );
    return data;
});