import type {IUser, IUserDummy} from "../models/user.ts";
import {urls} from "../constants/urls.ts";
import type {IPost, IPostDummy} from "../models/post.ts";
import type {IComment, ICommentDummy} from "../models/comment.ts";

export const userServices = {
    getUsers: async (): Promise<IUser[]>=>{
        return await fetch(urls.users.allUsers).then(res => res.json());
    },

    getUserById: async (id: number): Promise<IUser | null> => {
        return await fetch(urls.users.user(id)).then(res => res.json());
    },
    getUsersDummy: async (): Promise<IUserDummy[]>=>{
        const data = await fetch(urls.users.allUsersDummy).then(res => res.json());
        return data.users
    },

    getUserByIdDummy: async (id: number): Promise<IUserDummy | null> => {
        return await fetch(urls.users.userDummy(id)).then(res => res.json());
    },
}

export const postServices = {
    getPosts: async (): Promise<IPost[]>=>{
        return await fetch(urls.posts.allPosts).then(res => res.json());
    },

    getPostById: async (id: number): Promise<IPost | null> => {
        return await fetch(urls.posts.post(id)).then(res => res.json());
    },
    getPostsDummy: async (): Promise<IPostDummy[]>=>{
        const data = await fetch(urls.posts.allPostsDummy).then(res => res.json());
        return data.posts
    },

    getPostByIdDummy: async (id: number): Promise<IPostDummy | null> => {
        return await fetch(urls.posts.postDummy(id)).then(res => res.json());
    },
}

export const commentServices = {
    getComments: async (): Promise<IComment[]>=>{
        return await fetch(urls.comments.allComments).then(res => res.json());
    },

    getCommentById: async (id: number): Promise<IComment | null> => {
        return await fetch(urls.comments.comment(id)).then(res => res.json());
    },
    getCommentsDummy: async (): Promise<ICommentDummy[]>=>{
        const data = await fetch(urls.comments.allCommentsDummy).then(res => res.json());
        return data.comments;
    },

    getCommentByIdDummy: async (id: number): Promise<ICommentDummy | null> => {
        return await fetch(urls.comments.commentDummy(id)).then(res => res.json());
    },
}
