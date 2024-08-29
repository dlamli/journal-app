import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAn_pJVErCKl5N1LWarp94xp88CdzVD_uc",
    authDomain: "react-projects-f9679.firebaseapp.com",
    projectId: "react-projects-f9679",
    storageBucket: "react-projects-f9679.appspot.com",
    messagingSenderId: "566639946672",
    appId: "1:566639946672:web:9cadaafb9c1fdd4d338475",
};

export const fireBaseApp  = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(fireBaseApp);
export const fireBaseDB   = getFirestore(fireBaseApp);
