import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Auth } from "src/auth/routes/Auth.routes";
import { Journal } from "src/journal/routes/Journal.routes";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/auth/*" element={<Auth />} />
            <Route path="/*" element={<Journal />} />
        </Route>
    )
);
