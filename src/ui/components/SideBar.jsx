import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    List,
    Toolbar,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "src/ui/components";

export const SideBar = ({ drawerWidth }) => {
    const { displayName } = useSelector((state) => state.auth);
    const { notes } = useSelector((state) => state.journal);
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" nowrap="true" component="div">
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {notes.map((note) => (
                        <SideBarItem key={note.id} {...note} />
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
