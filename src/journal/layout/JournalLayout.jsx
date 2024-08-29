import { Box, Grid, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "src/ui";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
    return (
        <Grid sx={{ display: "flex" }}>
            <NavBar drawerWidth={drawerWidth} />

            <SideBar drawerWidth={drawerWidth} />

            <Box
                className="animate__animated animate__fadeIn"
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                <Toolbar />

                {children}
            </Box>
        </Grid>
    );
};
