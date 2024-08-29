import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import {
    AppBar,
    Grid,
    IconButton,
    Toolbar,
    Typography,
    Link,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { starLogout } from "src/store";

export const NavBar = ({ drawerWidth }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(starLogout());
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                minWidth: "221px",
                width: {
                    sm: `calc(100% - ${drawerWidth}px)`,
                    ml: { sm: `${drawerWidth}px` },
                },
                backgroundColor: "primary.main",
                color: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6" nowrap="true" component="div">
                        JournalApp
                    </Typography>
                    <Link component={RouterLink} to="/auth/login">
                        <IconButton color="error" onClick={handleLogout}>
                            <LogoutOutlined />
                        </IconButton>
                    </Link>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
