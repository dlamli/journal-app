import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPage } from "src/journal/pages/JournalPage";

export const Journal = () => {
    return (
        <Routes>
            <Route path="/" element={<JournalPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};
