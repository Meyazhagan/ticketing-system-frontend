import React, { createContext, useContext, useEffect, useReducer } from "react";
import { getAllConverstation } from "../apis/Converstation";
import { getToken } from "../helper/LocalStorage";

const ConverstationContext = createContext();

function ConverstationProvider({ children }) {
    const [converstation, dispatch] = useReducer(converstationReducer, []);
    const fetchConverstations = async () => {
        try {
            const { data } = await getAllConverstation();
            const {
                success: { converstation },
            } = data;
            dispatch({ type: "SET", payload: converstation });
        } catch (err) {
            dispatch({ type: "SET", payload: [] });
        }
    };

    // const

    const getById = (id) => {
        const index = getIndex(converstation, id);
        if (index === -1) return {};
        return converstation[index];
    };

    const addMessage = ({ id, message: payload }) => {
        dispatch({ type: "ADD_MESSAGE", payload, id });
    };

    useEffect(() => {
        if (getToken()) fetchConverstations();
    }, []);
    return (
        <ConverstationContext.Provider
            value={{
                converstation,
                fetchConverstations,
                getById,
                addMessage,
                fetchConverstations,
            }}>
            {children}
        </ConverstationContext.Provider>
    );
}

function useConverstationContext() {
    return useContext(ConverstationContext);
}

const getIndex = (arr, id) => {
    return arr.findIndex((e) => e._id === id);
};

function converstationReducer(state = [], { type, payload, id }) {
    switch (type) {
        case "SET":
            return payload;

        case "ADD_MESSAGE":
            const index = getIndex(state, id);
            if (index === -1) return state;
            const msgIndex = getIndex(state[index]?.messages, payload._id);
            if (msgIndex !== -1) return state;
            return [
                ...state.slice(0, index),
                { ...state[index], messages: [...state[index]?.messages, payload] },
                ...state.slice(index + 1),
            ];

        default:
            return state;
    }
}

export default useConverstationContext;
export { ConverstationProvider };
