import axios from "axios";
import { logout } from "./AuthApi";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

axios.interceptors.request.use((config) => {
    config.headers.auth_token = localStorage.getItem("token");
    return config;
});

axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err.response?.data?.error === "Invalid Auth Token") {
            logout();
            window.location = "/";
        }
        return Promise.reject(err);
    }
);

const methods = {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete,
};

export default methods;
