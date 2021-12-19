import { removeToken } from "../helper/LocalStorage";
import http from "./http";

const login = ({ email, password }) => {
    return http.post("/auth/login", { email, password });
};

const forgotPassword = ({ email }) => {
    return http.post("/auth/forgot-password", { email });
};

const resetPassword = (token, { password, conformPassword }) => {
    return http.post(`/auth/reset-password/${token}`, { password, conformPassword });
};

const resentActivation = ({ email }) => {
    return http.post("/auth/resend-activation", { email });
};

const verifyUser = (token) => {
    return http.get(`/auth/verify-activation/${token}`);
};

const logout = () => {
    removeToken();
};
export { login, forgotPassword, resetPassword, resentActivation, verifyUser, logout };
