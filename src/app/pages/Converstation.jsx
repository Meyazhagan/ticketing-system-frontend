import React from "react";
import { useParams } from "react-router-dom";

import Chat from "../../components/Chat";
import QueryDetails from "../../components/QueryDetails";
import useQueryContext from "../../context/QueryContext";

function Converstation() {
    const { getById } = useQueryContext();
    const { queryId, converstationId } = useParams();
    return (
        <div className="flex">
            <div className="flex-shrink-0 overflow-y-auto h-[93vh] w-[50%] border-r-2 relative">
                <div className="w-full ">
                    <Chat />
                </div>
            </div>

            <QueryDetails query={getById(queryId)} />
        </div>
    );
}

export default Converstation;
