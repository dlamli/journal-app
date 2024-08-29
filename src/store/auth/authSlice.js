import { createSlice } from "@reduxjs/toolkit";
import {
    STATUS_AUTHENTICATED,
    STATUS_CHECKING,
    STATUS_NOT_AUTHENTICATED,
} from "src/data/data";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: STATUS_CHECKING,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = STATUS_AUTHENTICATED;
            state.uid = payload?.uid;
            state.email = payload?.email;
            state.displayName = payload?.displayName;
            state.photoURL = payload?.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = STATUS_NOT_AUTHENTICATED;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkCredentials: (state) => {
            state.status = STATUS_CHECKING;
        },
    },
});

export const { login, logout, checkCredentials } = authSlice.actions;
