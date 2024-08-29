import { AppRouter } from "src/router/AppRouter.routes";
import { AppTheme } from "./theme";

export const JournalApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
};
