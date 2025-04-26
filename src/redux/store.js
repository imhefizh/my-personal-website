import { configureStore } from "@reduxjs/toolkit";
import GeneralSlice from "./slices/GeneralSlice";

const store = configureStore({
    reducer: {
        general: GeneralSlice,
    },
});

export default store;