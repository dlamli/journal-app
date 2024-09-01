import { createSlice } from "@reduxjs/toolkit";

const updateNoteContent = (notes = [], payloadInfo) => {
    return notes.map((note) => {
        if (note.id === payloadInfo.id) {
            return payloadInfo;
        }
        return note;
    });
};

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        active: null,
        // active: {
        //     id: "ABC123",
        //     title: "",
        //     body: "",
        //     date: 1234567,
        //     imgUrls: [],
        // },
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload);
            state.isSaving = false;
        },
        setActiveNote: (state, { payload }) => {
            state.active = payload;
            state.messageSaved = "";
        },
        setNotes: (state, { payload }) => {
            state.notes = payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = "";
        },
        setPhotosToActiveNote: (state, { payload }) => {
            state.active.imgUrls = [...state.active.imgUrls, ...payload];
            state.isSaving = false;
        },
        updatedNote: (state, { payload }) => {
            state.isSaving = false;
            state.notes = updateNoteContent(state.notes, payload);
            state.messageSaved = `${payload.title}, updated correctly`;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, { payload }) => {
            state.isSaving = false;
            state.notes = state.notes.filter((note) => note.id!== payload);
            state.active = null;
            state.messageSaved = `${payload.title}, deleted successfully`;
        },
    },
});

export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updatedNote,
} = journalSlice.actions;
