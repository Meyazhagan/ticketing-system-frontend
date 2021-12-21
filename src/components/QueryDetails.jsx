import React from "react";
import getTimeStamp from "../helper/getTimeStamp";

function QueryDetails({ query, heading }) {
    return (
        <div className="py-10 px-10 grid grid-cols-12 flex-grow gap-y-4">
            {heading && (
                <>
                    <div className="flex items-center justify-between col-span-full">
                        <h2 className="text-indigo-900 opacity-90 text-xl font-semibold">
                            <span className="uppercase">
                                QN{query?._id?.toString().substring(0, 8)}
                            </span>
                            - {query.title}
                        </h2>
                    </div>
                    <div className="bg-gray-200 h-[1px] col-span-full"></div>
                </>
            )}
            <div className="col-span-6">
                <h3 className="text-slate-500">Create at</h3>
                <div className="text-gray-700 text-sm">{getTimeStamp(query._id) || "-"}</div>
            </div>
            <div className="col-span-3">
                <h3 className="text-slate-500">Assigned To</h3>
                <div className="text-gray-700 text-sm">{query?.assignedTo?.firstName}</div>
            </div>
            <div className="col-span-3">
                <h3 className="text-slate-500">Rasied By</h3>
                <div className="text-gray-700 text-sm">{query?.rasiedBy?.firstName}</div>
            </div>
            <div className="col-span-full">
                <h3 className="text-slate-500">Description</h3>
                <div className="text-gray-700 text-sm">{query.description}</div>
            </div>
            <div className="col-span-full">
                <h3 className="text-slate-500">Tags</h3>
                <div className="flex items-center gap-4 mt-2">
                    {query?.tags?.length > 0 &&
                        query?.tags?.map((tag, index) => (
                            <div
                                key={index}
                                className="bg-green-50 tracking-wider text-sm text-green-600 px-4 py-1 rounded-full">
                                {tag}
                            </div>
                        ))}
                </div>
            </div>

            <div className="col-span-6">
                <h3 className="text-slate-500">Category</h3>
                <div className="text-gray-700 text-sm">{query.category}</div>
            </div>
            <div className="col-span-6">
                <h3 className="text-slate-500">Sub Category</h3>
                <div className="text-gray-700 text-sm">{query.subCategory || "-"}</div>
            </div>
            <div className="col-span-6">
                <h3 className="text-slate-500">Preferred Language:</h3>
                <div className="text-gray-700 text-sm">{query.preferredLanguage}</div>
            </div>
        </div>
    );
}

export default QueryDetails;
