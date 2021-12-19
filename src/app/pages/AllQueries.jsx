import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Query from "../../components/Query";
import useQueryContext from "../../context/QueryContext";

function AllQueries() {
    const { query: queries } = useQueryContext();
    const history = useHistory();

    return (
        <div className="flex items-center flex-col overflow-hidden max-h-screen p-4">
            <div className="w-[75%] mx-auto overflow-auto">
                {queries.map((query) => (
                    <Query
                        key={query._id}
                        query={query}
                        action={() =>
                            history.push(
                                `/query/${query._id}/converstation/${query.converstationId}`
                            )
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default AllQueries;
