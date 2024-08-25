import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "src/auth/layout/AuthLayout";

export const LoginPage = () => {
    return (
        <AuthLayout title="LoginPage">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            placeholder="test@email.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBlock: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Typography>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ marginInlineStart: 1 }}>
                                    Google
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            direction: "row",
                            justifyContent: { xs: "center", sm: "end" },
                        }}
                    >
                        <Link
                            color="inherit"
                            to="/auth/register"
                            component={RouterLink}
                        >
                            Create account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
