import { fireBaseAuth } from "./config";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
