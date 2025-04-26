import { createSlice } from "@reduxjs/toolkit";

export const GeneralSlice = createSlice({
    name: "general",
    initialState: {
        init: "",
    },
    reducers: {
        updateInit: (state, action) => {
            state.init = "It works!"
        }
    }
})

export const { updateInit } = GeneralSlice.actions;

export default GeneralSlice.reducer;