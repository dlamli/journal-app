import { loginUser, registerUser, signInWithGoogle } from "src/firebase";
import { checkCredentials, login, logout } from "src/store";

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

export const startCreatingUserWithEmailPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUser({
            email,
            password,
            displayName,
        });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, email, displayName, photoURL }));
    };
};

export const startLoginWithEmailPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkCredentials());

        const { ok, uid, photoURL, errorMessage } = await loginUser({
            email,
            password,
            displayName,
        });

        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, email, displayName, photoURL }));
    };
};
