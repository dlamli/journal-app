import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "src/auth/layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="RegisterPage">
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="John Doe"
                            fullWidth
                        />
                    </Grid>
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
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                <Typography>Create Account</Typography>
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
                        <Typography sx={{ marginInlineEnd: 1 }}>
                            Have Account?
                        </Typography>
                        <Link
                            color="primary.main"
                            to="/auth/login"
                            component={RouterLink}
                        >
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
