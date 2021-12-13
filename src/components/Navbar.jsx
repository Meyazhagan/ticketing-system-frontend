import React from "react";
import { Link } from "react-router-dom";

function Button({ text, bg, padding }) {
    return (
        <div>
            <button
                className={`
          ${padding || "px-6 py-2"} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}>
                <span>{text}</span>
            </button>
        </div>
    );
}

function Navbar() {
    return <div>NAv</div>;
}

export default Navbar;
