import React from "react";
import { categoryData, preferredLanguage, status } from "../helper/QueriesFrom";

function QueryFilter({ setFilter }) {
    const handleChanges = (key, value) => {
        setFilter((filter) => {
            const index = filter[key]?.indexOf(value);
            if (index === -1) return { ...filter, [key]: [...filter[key], value] };

            return {
                ...filter,
                [key]: [...filter[key]?.slice(0, index), ...filter[key]?.slice(index + 1)],
            };
        });
    };
    return (
        <div>
            <div className="mt-4">
                <h2>Query Status</h2>
                <div>
                    {status.map((s, index) => (
                        <div key={index} className="mt-2">
                            <input
                                type="checkbox"
                                className="rounded mr-4 focus:ring-0 cursor-pointer"
                                id={s}
                                name={s}
                                onChange={() => handleChanges("status", s)}
                            />
                            <label htmlFor={s} className="cursor-pointer">
                                {s}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h2>Category</h2>
                <div>
                    {categoryData.map(({ name }, index) => (
                        <div key={index} className="mt-2">
                            <input
                                type="checkbox"
                                className="rounded mr-4 focus:ring-0 cursor-pointer"
                                id={name}
                                name={name}
                                onChange={() => handleChanges("category", name)}
                            />
                            <label htmlFor={name} className="cursor-pointer">
                                {name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <h2>Sub Category</h2>
                <div>
                    {categoryData.map(({ subCategory }) =>
                        subCategory.map(({ name }, index) => (
                            <div key={index} className="mt-2">
                                <input
                                    type="checkbox"
                                    className="rounded mr-4 focus:ring-0 cursor-pointer"
                                    id={name}
                                    name={name}
                                    onChange={() => handleChanges("subCategory", name)}
                                />
                                <label htmlFor={name} className="cursor-pointer">
                                    {name}
                                </label>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="mt-4">
                <h2>Preferred Language</h2>
                <div>
                    {preferredLanguage.map((language, index) => (
                        <div key={index} className="mt-2">
                            <input
                                type="checkbox"
                                className="rounded mr-4 focus:ring-0 cursor-pointer"
                                id={language}
                                name={language}
                                onChange={() => handleChanges("preferredLanguage", language)}
                            />
                            <label htmlFor={language} className="cursor-pointer">
                                {language}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QueryFilter;
