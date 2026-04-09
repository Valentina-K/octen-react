import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComment.ts";
import {fetchComments} from "../operations/commentOperations.ts";

type CommentSliceType = {
    comments: IComment[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialCommentState: CommentSliceType = {
    comments: [],
    status: 'idle',
    error: null
}

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialCommentState,
    reducers: {},
    extraReducers: builder =>
        builder
    .addCase(fetchComments.pending, state=> {
        state.status = "loading"
    })
        .addCase(fetchComments.fulfilled, (state, action: PayloadAction<IComment[]>)=>{
            state.comments = action.payload;
            state.status = "succeeded"
        })
        .addCase(fetchComments.rejected, (state, action) => {
            state.error = action.error.message ?? null
        }),
});

export default commentSlice.reducer;