import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { getToken } from "../helper/LocalStorage";
import useConverstationContext from "../context/ConverstationContext";
import useQueryContext from "../context/QueryContext";
const SocketContext = createContext();

function SocketProvider({ children }) {
    const [socket, setSocket] = useState();
    const { addMessage, fetchConverstations } = useConverstationContext();
    const { create, update, setAllQueries } = useQueryContext();

    useEffect(() => {
        if (getToken()) {
            const socket = io(import.meta.env.VITE_SOCKET_URL, {
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
                setAllQueries((prevQueries) => [query, ...prevQueries]);
            });
            socket.on("receive-query-updates", ({ query }) => {
                update(query);
                fetchConverstations();
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
            else {
                update(query);
                fetchConverstations();
            }
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
