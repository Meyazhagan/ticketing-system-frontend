const TOKEN = "token";

const setToken = (token) => {
    localStorage.setItem(TOKEN, token);
};

const getToken = () => {
    return localStorage.getItem(TOKEN);
};

const removeToken = () => {
    localStorage.removeItem(TOKEN);
};

export { setToken, getToken, removeToken };
