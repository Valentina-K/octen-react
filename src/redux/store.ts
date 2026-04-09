import {configureStore} from "@reduxjs/toolkit";
import {commentSlice} from "./slices/commentSlice.ts";
import {postSlice} from "./slices/postSlice.ts";
import {userSlice} from "./slices/userSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector = useSelector.withTypes<RootState>();