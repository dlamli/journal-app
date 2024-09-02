import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { fireBaseDB } from "src/firebase";
import {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updatedNote,
} from "./journalSlice";
import { fileUpload, loadNotes } from "src/helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        console.log(getState());

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
            imgUrls: [],
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

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active: activeNote } = getState().journal;

        const noteToFireStore = { ...activeNote };
        delete noteToFireStore.id;

        const docRef = doc(fireBaseDB, `${uid}/journal/notes/${activeNote.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updatedNote(activeNote));
    };
};

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());

        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrl = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrl));
    };
};

export const startDeleteNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: activeNote } = getState().journal;

        const docRef = doc(fireBaseDB, `${uid}/journal/notes/${activeNote.id}`);
        const res = await deleteDoc(docRef);

        dispatch(deleteNoteById(activeNote.id));
    };
};
