import http from "./http";

const assignQuery = (queryId, assignedToId) => {
    return http.patch("/assign/query", { queryId, assignedToId });
};

export { assignQuery };
