import React from "react";
import classNames from "classnames";
import Label from "./Label";
import Error from "./Error";

function Input(props) {
    const { label, id, name, formik, ...rest } = props;

    const error = formik.touched[name] && formik.errors[name];
    return (
        <div className="relative bg-white mt-4 w-full">
            <input
                type="email"
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

export default Input;
