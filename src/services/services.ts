import type {IComment} from "../models/comments.ts";

const base_url = import.meta.env.VITE_BASE_URL;

export const getComments = async (): Promise<IComment[]> =>
{
    return await fetch(`${base_url}/comments`)
        .then(res => res.json());
}