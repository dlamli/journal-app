import { checkCredentials } from "./authSlice";

export const checkAuthentication = (email, password) => {
    return async (dispatch, getState) => {
        dispatch(checkCredentials());
    };
};

export const checkGoogleSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkCredentials());
    };
};
