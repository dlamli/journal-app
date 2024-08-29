import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from "react-router-dom";

import { STATUS_AUTHENTICATED, STATUS_CHECKING } from "src/data/data";
import { Auth } from "src/auth/routes/Auth.routes";
import { Journal } from "src/journal/routes/Journal.routes";
import { CheckingAuth } from "src/ui";
import { LoginPage } from "src/auth";
import { useCheckAuth } from "src/hooks";

export const AppRouter = () => {
    const status = useCheckAuth();

    if (status === STATUS_CHECKING) {
        return <CheckingAuth />;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                {status === STATUS_AUTHENTICATED ? (
                    <Route path="/*" element={<Journal />} />
                ) : (
                    <Route path="/auth/*" element={<Auth />} />
                )}
                <Route path="/*" element={<Navigate to="/auth/login" />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};
