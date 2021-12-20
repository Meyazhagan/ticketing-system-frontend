import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getToken } from "../helper/LocalStorage";
import useConverstationContext from "../context/ConverstationContext";
import useQueryContext from "../context/QueryContext";
const SocketContext = createContext();

function SocketProvider({ children }) {
    const [socket, setSocket] = useState();
    const { addMessage } = useConverstationContext();
    const { create, update } = useQueryContext();

    useEffect(() => {
        if (getToken()) {
            const socket = io("http://localhost:3001/converstation", {
                auth: { token: getToken() },
            });
            setSocket(socket);
            socket.on("connect", OnSocketConnect(socket));
        }
        return () => {
            if (socket) {
                socket.off("receive-message");
                socket.disconnect();
            }
        };
    }, []);

    function OnSocketConnect(socket) {
        return () => {
            socket.on("receive-message", ({ id, message }) => {
                addMessage({ id, message });
            });
            socket.on("receive-query-created", ({ query }) => {
                create(query);
            });
            socket.on("receive-query-updates", ({ query }) => {
                update(query);
            });
        };
    }

    const addNewMessage = ({ id, message }) => {
        socket.emit("send-message", { id, message }, ({ message, error }) => {
            if (error) console.log(error);
            else addMessage({ id, message });
        });
    };
    const createQuery = ({ query }) => {
        socket.emit("query-created", { query }, ({ query, error }) => {
            if (error) console.log(error);
            else create(query);
        });
    };
    const updateQuery = ({ query }) => {
        socket.emit("query-updates", { query }, ({ query, error }) => {
            if (error) console.log(error);
            else update(query);
        });
    };

    return (
        <SocketContext.Provider value={{ addNewMessage, createQuery, updateQuery }}>
            {children}
        </SocketContext.Provider>
    );
}

function useSocketContext() {
    return useContext(SocketContext);
}

export default useSocketContext;

export { SocketProvider };
