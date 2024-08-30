import { Navigate, Route, Routes } from "react-router-dom";
import { HOME_PATH, OTHER_PATH } from "src/data/data";
import { JournalPage } from "src/journal/pages/JournalPage";

export const Journal = () => {
    return (
        <Routes>
            <Route path={HOME_PATH} element={<JournalPage />} />

            <Route path={OTHER_PATH} element={<Navigate to={HOME_PATH} />} />
        </Routes>
    );
};
