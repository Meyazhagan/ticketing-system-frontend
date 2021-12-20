import React from "react";
import { useParams } from "react-router-dom";

import Chat from "../../components/Chat";
import QueryDetails from "../../components/QueryDetails";
import useConverstationContext from "../../context/ConverstationContext";
import useQueryContext from "../../context/QueryContext";

function Converstation() {
    const { getById: getQuery } = useQueryContext();
    const { getById: getConverstation } = useConverstationContext();
    const { queryId, converstationId } = useParams();
    return (
        <div className="flex md:flex-row flex-col-reverse">
            <div className="flex-shrink-0 overflow-hidden flex flex-col h-[calc(100vh-60px)] md:w-[50%] border-r-2 relative">
                <Chat converstation={getConverstation(converstationId)} />
            </div>

            <QueryDetails query={getQuery(queryId)} heading={true} />
        </div>
    );
}

export default Converstation;
