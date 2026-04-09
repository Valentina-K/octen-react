import {createAsyncThunk} from "@reduxjs/toolkit";

export function createApiThunk<T>(
    sliceName: string,
    actionName: string
) {
    return createAsyncThunk<T>(
        `${sliceName}/${actionName}`,
        async (): Promise<T> => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${sliceName}`);
            return await response.json() as T;
        }
    );
}