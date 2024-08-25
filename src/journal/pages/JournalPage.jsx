import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "src/journal/layout/JournalLayout";
import { NoteView, NothingSelectedView } from "src/journal/views";

export const JournalPage = () => {
    return (
        <>
            <JournalLayout>
                <NothingSelectedView />

                {/* <NoteView /> */}

                <IconButton
                    size="large"
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
