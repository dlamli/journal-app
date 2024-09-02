import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
    DeleteOutline,
    SaveOutlined,
    UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";

import { useForm } from "src/hooks";
import {
    setActiveNote,
    startDeleteNote,
    startSaveNote,
    startUploadingFiles,
} from "src/store/journal";
import { ImageGallery } from "src/ui";

export const NoteView = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const {
        active: activeNote,
        messageSaved,
        isSaving,
    } = useSelector((state) => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(activeNote);

    const dateString = useMemo(() => {
        const updatedDate = new Date(date);
        return updatedDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire("Note updated ", messageSaved, "success");
        }
    }, [messageSaved]);

    const handleSaveNote = () => {
        dispatch(startSaveNote());
    };

    const handleFileChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    };

    const handleDeleteNote = () => {
        dispatch(startDeleteNote());
        Swal.fire("Note deleted ", messageSaved, "success");
    };
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn animate__faster"
        >
            <Grid item>
                <Typography fontSize={38} fontWeight="light">
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>
                <input
                    type="file"
                    name="files"
                    multiple
                    onChange={handleFileChange}
                    className="d-none"
                    ref={fileInputRef}
                />
                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadOutlined />
                </IconButton>
                <Button
                    disabled={isSaving}
                    onClick={handleSaveNote}
                    color="primary"
                    sx={{ p: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
                <Button onClick={handleDeleteNote} color="error">
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label="Title"
                    sx={{ border: "none", mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happen today?"
                    sx={{ border: "none", mb: 1 }}
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>
            <ImageGallery imgs={activeNote.imgUrls} />
        </Grid>
    );
};
