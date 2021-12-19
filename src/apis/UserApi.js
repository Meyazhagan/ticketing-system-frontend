import http from "./http";
import { pick } from "lodash";

const pickProps = ["firstName", "lastName", "email", "password", "conformPassword"];

export const register = (user) => {
    return http.post("/user/register", pick(user, pickProps));
};

export const getMe = () => {
    return http.get("/user/me");
};
