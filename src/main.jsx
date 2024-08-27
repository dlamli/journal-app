import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "src/js";
import "src/styles/sass/main.scss";

import { JournalApp } from "src/JournalApp";
import { store } from "src/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <JournalApp />
        </Provider>
    </React.StrictMode>
);
