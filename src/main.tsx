import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router";
import { ContextProvider } from "./Context.tsx";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <ContextProvider>
            <StrictMode>
                <App />
            </StrictMode>
        </ContextProvider>
    </HashRouter>
);
