import React from "react";

function QueryForm() {
    return (
        <form className="flex justify-center gap-4 mt-52">
            <div className="relative bg-red-200">
                <input
                    type="email"
                    className="peer border-2 rounded-lg !bg-white"
                    id="first-name"
                    placeholder="Hello"
                />
                <label htmlFor="first-name " className="absolute top-0 left-0">
                    first Name
                </label>
            </div>
        </form>
    );
}

export default QueryForm;

