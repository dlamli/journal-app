import { fireBaseAuth } from "./config";

import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(fireBaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        };
    }
};

export const registerUser = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(
            fireBaseAuth,
            email,
            password
        );

        const { uid, photoURL } = resp.user;

        await updateProfile(fireBaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            displayName,
            photoURL,
        };
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        };
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const { user } = await signInWithEmailAndPassword(
            fireBaseAuth,
            email,
            password
        );

        const { uid, displayName, photoURL } = user;

        return {
            ok: true,
            uid,
            displayName,
            photoURL,
        };
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        };
    }
};

export const logoutFireBase = async () => {
    return await fireBaseAuth.signOut();
};
