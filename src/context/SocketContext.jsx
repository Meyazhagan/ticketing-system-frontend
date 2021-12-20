import React, { createContext, useContext, useEffect, useReducer } from "react";

const SocketContext = createContext();

function SocketProvider({ children }) {
    useEffect(() => {}, []);

    return (
        <SocketContext.Provider value={{ user, dispatch: userDispatch }}>
            {children}
        </SocketContext.Provider>
    );
}

function useSocketContext() {
    return useContext(SocketContext);
}

function UserReducer(state, { type, payload }) {
    switch (type) {
        case "SET":
            return payload;
        case "UPDATE":
            return { ...state, ...payload };
        case "REMOVE":
            return {};
        default:
            return state;
    }
}

export default useSocketContext;

export { SocketProvider };
