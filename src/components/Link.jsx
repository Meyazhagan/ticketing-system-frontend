import React from "react";
import { useHistory } from "react-router-dom";

function Link({ children, path }) {
    const history = useHistory();

    path = path === "#" ? "/" : path;

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                history.push(path);
            }}
            className="text-blue-800 hover:underline hover:decoration-blue-800 hover:decoration-2">
            {children}
        </button>
    );
}

export default Link;
