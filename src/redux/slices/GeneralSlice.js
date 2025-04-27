import { createSlice } from "@reduxjs/toolkit";

export const GeneralSlice = createSlice({
    name: "general",
    initialState: {
        page: 0,
    },
    reducers: {
        updatePage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const { updatePage } = GeneralSlice.actions;

export default GeneralSlice.reducer;