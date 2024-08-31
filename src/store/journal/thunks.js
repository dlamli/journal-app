import { collection, doc, setDoc } from "firebase/firestore/lite";
import { fireBaseDB } from "src/firebase";
import {
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
} from "./journalSlice";
import { loadNotes } from "src/helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        console.log(getState());

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(fireBaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new Error("Invalid uid");

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};
