import React from "react";
import getTimeStamp from "../helper/getTimeStamp";

function QueryDetails({ query }) {
    console.log(getTimeStamp(query._id));
    return (
        <div className="py-10 px-10 grid grid-cols-12 flex-shrink-0 w-[50%]">
            <div className="flex items-center justify-between col-span-full">
                <h2 className="text-indigo-900 opacity-90 text-xl font-semibold">
                    QN2460 - {query.title}
                </h2>
            </div>
            <div className="bg-gray-200 h-[1px] col-span-full"></div>
            <div className="col-span-6">
                <h3 className="text-slate-500">Create at</h3>
                <div className="text-gray-700 text-sm">{getTimeStamp(query._id) || "-"}</div>
            </div>
            <div className="col-span-6">
                <h3 className="text-slate-500">Assigned To</h3>
                <div className="text-gray-700 text-sm">Suman Gangopadhyay</div>
            </div>
            <div className="col-span-full">
                <h3 className="text-slate-500">Description</h3>
                <div className="text-gray-700 text-sm">{query.description}</div>
            </div>
            <div className="col-span-full">
                <h3 className="text-slate-500">Tags</h3>
                <div className="flex items-center gap-4 mt-2">
                    {query?.tags?.length > 0 &&
                        query?.tags?.map((tag) => (
                            <div className="bg-green-50 tracking-wider text-sm text-green-600 px-4 py-1 rounded-full">
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
