import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/AppRoutes";
import { AppProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import { ConverstationProvider } from "./context/ConverstationContext";
import { QueryProvider } from "./context/QueryContext";
import { io, Socket } from "socket.io-client";

function App() {
    let scoket;
    useEffect(() => {
        scoket = io("http://localhost:3001/converstation");

        scoket.emit("send-message", "Connected - send message");
        scoket.on("recieve-message", (message) => {
            console.log(message);
        });
        return () => scoket.disconnect();
    }, [scoket]);

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
