import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/AppRoutes";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import { ConverstationProvider } from "./context/ConverstationContext";
import { QueryProvider } from "./context/QueryContext";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <QueryProvider>
                    <ConverstationProvider>
                        <AppRoutes />
                        <ToastContainer />
                    </ConverstationProvider>
                </QueryProvider>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
