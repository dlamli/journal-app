import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

const storeConfig = {
    reducer: {
        auth: authSlice.reducer,
    },
};

export const store = configureStore(storeConfig);
