import { NoteAdd } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            className="animate__animated animate__fadeIn animate__faster"
            sx={{
                minHeight: "calc(100vh - 110px)",
                backgroundColor: "primary.main",
                borderRadius: 3,
            }}
        >
            <Grid item xs={12}>
                <NoteAdd sx={{ fontSize: 100, color: "white" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography color="white" variant="h5">
                    Select or create a note
                </Typography>
            </Grid>
        </Grid>
    );
};
