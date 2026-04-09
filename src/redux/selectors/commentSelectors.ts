import type {RootState} from "../store.ts";

export const selectComments = (state: RootState) =>
    state.commentStoreSlice.comments;

export const selectCommentsExist = (state: RootState) => state.commentStoreSlice.status === "succeeded";