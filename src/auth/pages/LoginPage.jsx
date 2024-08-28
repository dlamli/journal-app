import { useMemo } from "react";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "src/auth/layout/AuthLayout";
import { useForm } from "src/hooks";
import { checkAuthentication, checkGoogleSignIn } from "src/store";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.auth);
    const { email, password, onInputChange, onResetForm } = useForm({
        email: "john@email.com",
        password: "password123",
    });

    const isAuthenticating = useMemo(() => status === "checking", [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkAuthentication(email, password));
        onResetForm();
    };

    const handleGoogleSignIn = () => {
        dispatch(checkGoogleSignIn(email, password));
    };

    return (
        <AuthLayout title="LoginPage">
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            placeholder="test@email.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBlock: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                <Typography>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained"
                                fullWidth
                                onClick={handleGoogleSignIn}
                            >
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
                            color="primary.main"
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
