import React, { useEffect, useState } from "react";
import { assignQuery } from "../../apis/assign";
import { getAllFilterQuery } from "../../apis/QueryApi";
import Query from "../../components/Query";
import useAppContext from "../../context/AppContext";
import Spinner from "../../components/spinner";
import QueryDetails from "../../components/QueryDetails";
import QueryFilter from "../../components/QueryFilter";
import useQueryContext from "../../context/QueryContext";
import { useHistory } from "react-router-dom";
import Toastify from "../../components/ToastServices";
import useSocketContext from "../../context/SocketContext";

function AssignQuery() {
    const { user } = useAppContext();
    const { allQueries, filter, setFilter, setAllQueries } = useQueryContext();
    const { updateQuery } = useSocketContext();

    const history = useHistory();

    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(-1);

    const handleAssign = async (queryId) => {
        Toastify(assignQuery(queryId, user.id), {
            pending: "Processing Query Assigning",
            onSuccess: ({ data }) => {
                const {
                    success: { query },
                } = data;
                updateQuery({ query });
                history.push("/");
                return "Query Assigned";
            },
            onError: (data) => {
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });

        try {
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const {
                    data: { success },
                } = await getAllFilterQuery(filter);
                const { query } = success;
                setAllQueries(query);
            } catch (err) {
                console.log(err);
            }
        };
        fetchQueries();
    }, [filter]);
    return (
        <div className="grid grid-cols-12">
            <div className="md:col-span-2 col-span-full mx-4 md:mx-auto my-10">
                <QueryFilter setFilter={setFilter} />
            </div>
            <div className="md:col-span-10 col-span-full flex items-center flex-grow flex-col overflow-hidden p-4">
                {allQueries.length <= 0 && <p className="mt-10">There is No query Available</p>}
                <div className="w-full overflow-auto p-4">
                    {allQueries.map((query) => (
                        <div
                            key={query._id}
                            className="flex flex-col my-4 shadow-md  rounded-lg pb-4">
                            <Query
                                query={query}
                                action={() => {
                                    setCurrent((prev) => (prev !== query._id ? query._id : -1));
                                }}
                            />
                            {current === query._id && (
                                <div className="w-full">
                                    <QueryDetails query={query} heading={false} />
                                </div>
                            )}
                            {query.status === "UNASSIGNED" && (
                                <button
                                    onClick={() => handleAssign(query._id)}
                                    className="self-end mr-4 text-red-700
                                    px-3 py-1 bg-gray-50 rounded-lg
                                    font-semibold">
                                    {loading ? <Spinner /> : "Assign"}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AssignQuery;
