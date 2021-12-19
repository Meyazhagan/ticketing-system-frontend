import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../apis/AuthApi";

function Navigation({ user }) {
    return (
        <div
            className="flex items-center justify-between px-20 z-10 shadow-md
                min-w-max bg-blue-50 gap-10 fixed left-0 right-0 top-0">
            <div className="m-4 whitespace-nowrap">Zen Query System</div>
            <div className="">
                <form
                    className="flex items-center gap-4 
                    bg-white w-fit px-2 rounded-md border-gray-400
                    focus:ring-1 hover:ring-1 border">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="bg-transparent border-none
                        focus:ring-0"
                    />
                    <AiOutlineSearch className="text-gray-400" />
                </form>
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Query</li>
                    <li className="whitespace-nowrap">
                        <Link to="/create-query">Create Query</Link>
                    </li>
                    <li className="whitespace-nowrap">
                        <Link to="/assign-query">Assign Query</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div>{user.email}</div>
                <button
                    onClick={() => {
                        logout();
                        window.location = "/";
                    }}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Navigation;
