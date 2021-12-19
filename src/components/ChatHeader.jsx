import React from "react";
import { useParams } from "react-router-dom";
import useQueryContext from "../context/QueryContext";

function ChatHeader() {
    const { getById } = useQueryContext();
    const { queryId } = useParams();
    return (
        <div className="flex justify-end bg-white p-4">
            <div className="bg-green-50 font-semibold tracking-wider text-sm text-green-600 px-4 py-1 rounded-md">
                {getById(queryId).status || ""}
            </div>
        </div>
    );
}

export default ChatHeader;
