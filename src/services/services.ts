import type {IPost} from "../models/post.ts";

const base_url = import.meta.env.VITE_BASE_URL;

async function getPosts(): Promise<IPost[]>{
    return await fetch(`${base_url}/posts`).then((res) => res.json())
}

export {getPosts};

