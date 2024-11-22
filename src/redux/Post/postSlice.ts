import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./fetchPost";

interface fecthError {
    message : string
}

interface initInterface {
    loading: boolean, data: [], error: fecthError | null,
}

let initialState = { loading: false, data: [], error: null } as initInterface;

const postSlice = createSlice({
    name: "postReducer",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.loading = false
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
})

export const { } = postSlice.actions;
export const postReducer = postSlice.reducer;