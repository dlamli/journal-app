import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" nowrap component="div">
                        User
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {["January", "February", "March", "April"].map((txt) => (
                        <ListItem key={txt} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={txt} />
                                    <ListItemText
                                        secondary={
                                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                        }
                                    />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
