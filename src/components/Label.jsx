import classNames from "classnames";
import React from "react";

function Label({ label, error, id }) {
    return (
        <label
            htmlFor={id}
            className={classNames(
                `absolute left-3
        -top-[12px]
        text-sm
        peer-placeholder-shown:top-[10px]
        peer-placeholder-shown:text-base
        peer-focus:-top-[12px]
        peer-focus:text-sm
        transition-[top_ease-in_1000ms]
        bg-inherit px-2`,
                {
                    "text-red-500 focus:text-red-500 peer-placeholder-shown:text-red-500": error,
                    "text-gray-600 peer-focus:text-blue-700 peer-placeholder-shown:text-gray-400":
                        !error,
                }
            )}>
            {label}
        </label>
    );
}

export default Label;
