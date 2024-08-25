import React from "react";
import ReactDOM from "react-dom/client";

import "src/js";
import "src/styles.css";

import { JournalApp } from "src/JournalApp";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <JournalApp />
    </React.StrictMode>
);
