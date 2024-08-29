import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "src/auth/layout/AuthLayout";
import { useForm } from "src/hooks";
import { formInitialData } from "src/data/data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "src/store";

export const RegisterPage = () => {
    const [formSubmited, setformSubmited] = useState(false);
    const dispatch = useDispatch();

    const formValidations = {
        displayName: [(value) => value.length >= 1, "Name is required"],
        password: [
            (value) => value.length >= 6,
            "Password must be at least 6 characters long",
        ],
        email: [(value) => value.includes("@"), "Email must have @"],
    };

    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        emailValid,
        passwordValid,
        displayNameValid,
        onResetForm
    } = useForm(formInitialData, formValidations);

    const handleSubmit = (e) => {
        e.preventDefault();
        setformSubmited(true);

        if (!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
        onResetForm();
    };

    return (
        <AuthLayout title="RegisterPage">
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="John Doe"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmited}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            placeholder="test@email.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmited}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmited}
                            helperText={passwordValid}
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ marginBlock: 1 }}>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" fullWidth>
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
