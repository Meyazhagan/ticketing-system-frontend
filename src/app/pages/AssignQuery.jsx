import React, { useState } from "react";
import { assignQuery } from "../../apis/assign";
import Query from "../../components/Query";
import useQueryContext from "../../context/QueryContext";
import useAppContext from "../../context/AppContext";
import Spinner from "../../components/spinner";

function AssignQuery() {
    const { query: queries } = useQueryContext();
    const { user } = useAppContext();
    const [loading, setLoading] = useState(false);
    const handleAssign = async (queryId) => {
        try {
            setLoading(true);
            const { data } = await assignQuery(queryId, user.id);
            setLoading(false);
            console.log(data);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    return (
        <div className="flex items-center flex-col overflow-hidden max-h-screen p-4">
            <div className="w-[75%] mx-auto overflow-auto">
                {queries.map((query) => (
                    <div key={query._id} className="flex flex-col my-4 shadow-md  rounded-lg pb-4">
                        <Query query={query} action={() => {}} />
                        <button
                            onClick={() => handleAssign(query._id)}
                            className="self-end mr-4 text-red-700 
                            px-3 py-1 bg-gray-50 rounded-lg
                            font-semibold">
                            {loading ? <Spinner /> : "Assign"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AssignQuery;
