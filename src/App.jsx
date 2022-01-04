import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/AppRoutes";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import { ConverstationProvider } from "./context/ConverstationContext";
import { QueryProvider } from "./context/QueryContext";
import { SocketProvider } from "./context/SocketContext";

import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";

loadProgressBar();

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <QueryProvider>
                    <ConverstationProvider>
                        <SocketProvider>
                            <AppRoutes />
                            <ToastContainer />
                        </SocketProvider>
                    </ConverstationProvider>
                </QueryProvider>
            </AppProvider>
        </BrowserRouter>
    );
}

export default App;
