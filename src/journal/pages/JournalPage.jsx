import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { JournalLayout } from "src/journal/layout/JournalLayout";
import { NoteView, NothingSelectedView } from "src/journal/views";
import { startNewNote } from "src/store/journal";

export const JournalPage = () => {
    const { isSaving, active } = useSelector((state) => state.journal);
    const dispatch = useDispatch();

    const handleClickNewNote = () => dispatch(startNewNote());

    return (
        <>
            <JournalLayout>
                {active ? <NoteView /> : <NothingSelectedView />}

                <IconButton
                    size="large"
                    onClick={handleClickNewNote}
                    disabled={isSaving}
                    sx={{
                        color: "white",
                        backgroundColor: "error.main",
                        ":hover": {
                            backgroundColor: "error.main",
                            opacity: 0.9,
                        },
                        position: "fixed",
                        right: 50,
                        bottom: 50,
                    }}
                >
                    <AddOutlined sx={{ fontSize: 25 }} />
                </IconButton>
            </JournalLayout>
        </>
    );
};
