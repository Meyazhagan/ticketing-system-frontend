import { pick } from "lodash";
import http from "./http";

const queryProps = [
    "category",
    "subCategory",
    "tags",
    "title",
    "preferredLanguage",
    "description",
    "availableTime.from",
    "availableTime.till",
];

const getAllQuery = () => {
    return http.get("/query");
};
const getAllFilterQuery = (filter) => {
    return http.get("/query/filter", { params: filter });
};

const createQuery = (query) => {
    return http.post("/query", pick(query, queryProps));
};

export { getAllQuery, createQuery, getAllFilterQuery };
