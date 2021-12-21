import React, { createContext, useContext, useEffect, useReducer } from "react";
import jwt_decode from "jwt-decode";
import { getToken } from "../helper/LocalStorage";
import { logout } from "../apis/AuthApi";

const AppContext = createContext();

function AppProvider({ children }) {
    const [user, userDispatch] = useReducer(UserReducer, null);

    useEffect(() => {
        try {
            const payload = jwt_decode(getToken());
            // console.log(payload);
            userDispatch({ type: "SET", payload });
        } catch (err) {
            userDispatch({ type: "SET", payload: null });
            logout();
        }
    }, []);

    return (
        <AppContext.Provider value={{ user, dispatch: userDispatch }}>
            {children}
        </AppContext.Provider>
    );
}

function useAppContext() {
    return useContext(AppContext);
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

export default useAppContext;

export { AppProvider };
