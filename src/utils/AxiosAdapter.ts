import axios, { AxiosInstance } from 'axios';
import { InputTodoEssence } from 'interfaces/TodoEssences';

export interface HttpAdapter {
    get<T>( url: string ): Promise<T>;
    post( url: string, body: InputTodoEssence ): Promise<InputTodoEssence>;
    patch( id: number, url: string, body: InputTodoEssence ): Promise<InputTodoEssence>;
    delete( id: number, url: string ): Promise<number>;
}

export class AxiosAdapter implements HttpAdapter {
    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>( url );
            return data;
        } catch (error) {
            throw new Error('This is an error - Check logs');
        }
    }

    async post( url: string, body: InputTodoEssence ): Promise<InputTodoEssence> {
        try {
            const { data } = await this.axios.post( url, body );
            return data;
        } catch (error) {
            throw new Error('This is an error - Check logs');
        }
    }

    async patch( id: number, url: string, body: InputTodoEssence ): Promise<InputTodoEssence> {
        try {
            const { data } = await this.axios.patch( `${ url }/${ id }`, body );
            return data;
        } catch (error) {
            throw new Error('This is an error - Check logs');
        }
    }

    async delete( id: number, url: string ): Promise<number> {
        try {
            await this.axios.delete( `${ url }/${ id }` );
            return id;
        } catch (error) {
            throw new Error('This is an error - Check logs');
        }
    }
}