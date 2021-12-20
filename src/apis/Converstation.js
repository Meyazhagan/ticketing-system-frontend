import http from "./http";

const getAllConverstation = () => {
    return http.get("/converstation");
};
const getConverstationById = (id) => {
    return http.get(`/converstation/${id}`);
};

export { getAllConverstation, getConverstationById };
