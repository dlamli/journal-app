import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Grid,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { setActiveNote } from "src/store/journal";

export const SideBarItem = ({
    title = "",
    body = "",
    id,
    date,
    imgUrls = [],
}) => {
    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substring(0, 17) + "..." : title;
    }, [title]);

    const handleActiveNote = () => {
        dispatch(setActiveNote({ title, body, id, date, imgUrls }));
    };
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleActiveNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <Box>
                        <ListItemText primary={newTitle} />
                        <ListItemText secondary={body} />
                    </Box>
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
