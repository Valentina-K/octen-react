import type {RootState} from '../store.ts'
import {createSelector} from "@reduxjs/toolkit";
import {selectPosts} from "./postSelectors.ts";
import {selectComments} from "./commentSelectors.ts";
import type {IPost} from "../../models/IPost.ts";
import type {IComment} from "../../models/IComment.ts";

export const selectUsers = (state: RootState) =>
    state.userStoreSlice.users;

export const selectPostsByUser =
    createSelector([selectPosts, (_: RootState, userId: number) => userId],
        (posts, userId) => posts.filter(post => post.userId === userId));


export const selectUserPostsWithComments = createSelector(
    [selectPostsByUser, selectComments],
    (posts: IPost[], comments: IComment[]) =>
        posts.map((post: IPost) => ({
            ...post,
            comments: comments.filter(c => c.postId === post.id),
        }))
);
