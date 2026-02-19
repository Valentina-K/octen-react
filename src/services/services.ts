import type {ITodo} from "../models/todo.ts";

const base_url = import.meta.env.VITE_BASE_URL;

const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(base_url + 'todos').then((res) => res.json());
}

export { getTodos };