import type {RootState} from "../store.ts";

export const selectPosts = (state: RootState) =>
    state.postStoreSlice.posts;

export const selectPostsExist = (state: RootState) => state.postStoreSlice.status === "succeeded";