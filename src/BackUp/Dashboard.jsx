import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Query from "./Query";

function Dashboard() {
    return (
        <div className="min-w-max">
            <div className="flex items-center justify-between px-20 min-w-max bg-blue-50 gap-10">
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
                        <li>Home</li>
                        <li>Query</li>
                        <li className="whitespace-nowrap">Create Query</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex-shrink-0 overflow-y-scroll h-[90vh]">
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                    <Query />
                </div>
                <div className="p-10 m-4 space-y-10 border bg-white rounded-lg flex-shrink-0 w-fit">
                    <h2 className="text-center text-purple-900">Recent Query</h2>
                    <div className="flex items-center justify-between gap-10">
                        <h2 className="text-indigo-900 opacity-90 text-xl font-semibold">
                            QN2460 - How to create postman documentation?
                        </h2>
                        <div className="bg-green-50 font-semibold tracking-wider text-sm text-green-600 px-4 py-1 rounded-md">
                            Close
                        </div>
                    </div>
                    <div className="bg-gray-300 h-[1px]"></div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-slate-500">Create at</h3>
                            <div className="text-gray-700 text-sm">31/12/2021 - 12:38 PM</div>
                        </div>
                        <div>
                            <h3 className="text-slate-500">Assigned To</h3>
                            <div className="text-gray-700 text-sm">Suman Gangopadhyay</div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-slate-500">Description</h3>
                        <div className="text-gray-700 text-sm">
                            How to create postman documentation?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
