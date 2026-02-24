import type {IPost} from "../models/post.ts";
import type {ITodo} from "../models/todo.ts";
import type {IComment} from "../models/comment.ts";

const base_url = import.meta.env.VITE_BASE_URL;

async function getPosts(): Promise<IPost[]>{
    const result = await fetch(`${base_url}/posts`).then((res) => res.json())
    return result.posts;
}

const getTodos = async (): Promise<ITodo[]> => {
    const result = await fetch(base_url + 'todos').then((res) => res.json());
    return result.todos;
}

const getComments = async (): Promise<IComment[]> =>
{
    const result = await fetch(`${base_url}/comments`).then(res => res.json());
    return result.comments;

}

export {getPosts, getTodos, getComments};