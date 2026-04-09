import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../models/IUser.ts";
import {fetchUsers} from "../operations/userOperations.ts";

type UserSliceType = {
    users: IUser[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialUserState: UserSliceType = {
    users: [],
    status: 'idle',
    error: null
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialUserState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state,action)=> {
                    state.users = action.payload;
                    state.status = "succeeded";
                }
            )
            .addCase(fetchUsers.rejected, (state, action) =>
            {
                state.status = 'failed';
                state.error = action.error.message ?? null;
            });
    },
});

export default userSlice.reducer;