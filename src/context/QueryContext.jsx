import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getAllQuery } from "../apis/QueryApi";

const QueryContext = createContext();

function QueryProvider({ children }) {
    const [query, dispatch] = useReducer(queryReducer, []);
    const fetchQueries = async () => {
        try {
            const { data } = await getAllQuery();
            const {
                success: { query },
            } = data;
            dispatch({ type: "SET", payload: query });
        } catch (err) {}
    };

    useEffect(() => {
        fetchQueries();
    }, []);

    const getById = (id) => {
        const index = getIndex(query, id);
        if (index === -1) return {};
        return query[index];
    };
    const create = (payload) => {
        dispatch({ type: "CREATE", payload });
    };
    const update = (payload) => {
        dispatch({ type: "UPDATE", payload });
    };
    const remove = (payload) => {
        dispatch({ type: "DELETE", payload });
    };

    return (
        <QueryContext.Provider value={{ query, fetchQueries, create, update, getById, remove }}>
            {children}
        </QueryContext.Provider>
    );
}

const queryReducer = (state = [], { type, payload, id }) => {
    switch (type) {
        case "SET":
            return payload;
        case "CREATE":
            return [payload, ...state];
        case "UPDATE":
            const index = getIndex(state, payload._id);
            return [
                ...state.slice(0, index),
                { ...state[index], ...payload },
                ...state.slice(index + 1),
            ];
        case "DELETE":
            const i = getIndex(state, payload._id);
            return [...state.slice(0, i), ...state.slice(i + 1)];

        default:
            return state;
    }
};

const getIndex = (arr, id) => {
    return arr.findIndex((e) => e._id === id);
};

function useQueryContext() {
    return useContext(QueryContext);
}

export default useQueryContext;
export { QueryProvider };
