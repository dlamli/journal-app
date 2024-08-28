import { signInWithGoogle } from "src/firebase";
import { checkCredentials, login, logout } from "./authSlice";

export const checkAuthentication = (email, password) => {
    return async (dispatch, getState) => {
        dispatch(checkCredentials());
    };
};

export const checkGoogleSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkCredentials());

        const result = await signInWithGoogle();

        return !result.ok
            ? dispatch(logout(result.errorMessage))
            : dispatch(login(result));
    };
};
