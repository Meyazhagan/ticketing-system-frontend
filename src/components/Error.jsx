import classNames from "classnames";
import React from "react";

import { BiErrorAlt } from "react-icons/bi";

function Error({ error }) {
    return (
        <p
            className={classNames("pl-4 my-2 text-red-500 flex items-center gap-1", {
                "opacity-0": !error,
            })}>
            <BiErrorAlt className="w-4 h-4 flex-shrink-0" />
            {error}
        </p>
    );
}

export default Error;
