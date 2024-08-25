import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "src/auth/pages";

export const Auth = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
