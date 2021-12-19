import classNames from "classnames";
import React from "react";
import Error from "./Error";
import Label from "./Label";

function Textarea(props) {
    const { label, id, name, formik, ...rest } = props;
    const error = formik.touched[name] && formik.errors[name];

    return (
        <div className="relative bg-white mt-4 w-full">
            <textarea
                className={classNames(
                    `focus:ring-0 w-full
                    border border-gray-500
                    rounded-lg peer bg-inherit
                    placeholder-transparent`,
                    { "border-red-500 focus:border-red-500 ": error }
                )}
                name={name}
                id={id}
                placeholder="Label"
                rows={10}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[name]}
                {...rest}
            />
            <Label label={label} id={id} error={error} />
            <Error error={error} />
        </div>
    );
}

export default Textarea;
