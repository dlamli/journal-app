import { RouterProvider } from "react-router-dom";
import { router } from "src/router/AppRouter.routes";
import { AppTheme } from "./theme";

export const JournalApp = () => {
    return (
        <AppTheme>
            <RouterProvider router={router} />
        </AppTheme>
    );
};
