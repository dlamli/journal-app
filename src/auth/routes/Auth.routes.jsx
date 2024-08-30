import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "src/auth/pages";
import {
    HOME_PATH,
    LOGIN_PATH,
    OTHER_PATH,
    REGISTER_PATH,
} from "src/data/data";

export const Auth = () => {
    return (
        <Routes>
            <Route path={LOGIN_PATH} element={<LoginPage />} />
            <Route path={REGISTER_PATH} element={<RegisterPage />} />

            <Route path={OTHER_PATH} element={<Navigate to={HOME_PATH} />} />
        </Routes>
    );
};
