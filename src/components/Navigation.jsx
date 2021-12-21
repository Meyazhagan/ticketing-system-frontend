import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../apis/AuthApi";
import { FcMenu } from "react-icons/fc";
import classNames from "classnames";

function Navigation({ user }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="flex items-center z-10 shadow-md justify-between sm:px-10 
                max-w-full bg-blue-50 gap-4 fixed left-0 right-0 top-0">
            <FcMenu
                className="flex-shrink-0 ml-4 lg:hidden hover:bg-gray-200 w-10 h-10 p-2 rounded-full active:border-gray-600 active:border-2"
                onClick={() => setOpen((prev) => !prev)}
            />
            <div className="my-4 whitespace-nowrap">Zen Query System</div>
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
            <div
                className={classNames(
                    "lg:block lg:static lg:rounded-none lg:bg-transparent lg:shadow-none lg:py-0 py-8",
                    {
                        "fixed top-16 bg-white rounded-lg p-4 left-5 shadow-xl": open,
                        hidden: !open,
                    }
                )}>
                <ul className="flex items-center gap-10 lg:flex-row flex-col">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Query</li>
                    {user.role === "STUDENT" && (
                        <li className="whitespace-nowrap">
                            <Link to="/create-query">Create Query</Link>
                        </li>
                    )}
                    {user.role === "MENTOR" && (
                        <li className="whitespace-nowrap">
                            <Link to="/assign-query">Assign Query</Link>
                        </li>
                    )}

                    <div className="flex flex-col">
                        <div>{user.email}</div>
                        <button
                            className="text-red-500 mt-4 lg:mt-0"
                            onClick={() => {
                                logout();
                                window.location = "/";
                            }}>
                            Logout
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
