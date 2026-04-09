import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/IPost.ts";
import {fetchPosts} from "../operations/postOperations.ts";

type PostSliceType = {
    posts: IPost[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialPostState: PostSliceType = {
    posts: [],
    status: 'idle',
    error: null
}

export const postSlice = createSlice({
    extraReducers: builder =>
        builder
            .addCase(fetchPosts.pending, state => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
                state.status = "succeeded"
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message ?? null
            }),
    initialState: initialPostState,
    name: "postSlice",
    reducers: {},
});

export default postSlice.reducer;