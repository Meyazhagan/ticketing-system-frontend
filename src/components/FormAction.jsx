import classNames from "classnames";
import React from "react";

function FormAction({ formik, actionLabel, secondaryLabel }) {
    return (
        <div className="flex flex-row-reverse gap-4 justify-start">
            <button
                type="submit"
                onClick={formik.handleSubmit}
                disabled={!formik.isValid}
                className={classNames(
                    "px-7 py-2 rounded-md bg-indigo-700 text-white border border-indigo-700",
                    {
                        "opacity-75 cursor-not-allowed": !formik.isValid,
                    }
                )}>
                {actionLabel}
            </button>
            {secondaryLabel && (
                <button
                    onClick={formik.handleReset}
                    className="px-7 py-2 rounded-md  border border-indigo-700 text-indigo-700">
                    {secondaryLabel}
                </button>
            )}
        </div>
    );
}

export default FormAction;
