import { createSlice } from "@reduxjs/toolkit";

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
        },
        setNotes: (state, { payload }) => {
            state.notes = payload;
        },
        setSaving: (state, { payload }) => {},
        updateNote: (state, { payload }) => {},
        deleteNoteById: (state, { payload }) => {},
    },
});

export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;
