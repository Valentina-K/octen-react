import {createApiThunk} from "./getData.ts";
import type {IPost} from "../../models/IPost.ts";

export const fetchPosts =
    createApiThunk<IPost[]>('posts', 'fetchPosts');