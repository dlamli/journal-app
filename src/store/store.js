import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "src/store/auth";
import { journalSlice } from "src/store/journal";

const storeConfig = {
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
    },
};

export const store = configureStore(storeConfig);
