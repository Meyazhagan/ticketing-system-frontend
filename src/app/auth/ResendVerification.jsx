import { useFormik } from "formik";
import React from "react";
import { resentActivation } from "../../apis/AuthApi";
import FormAction from "../../components/FormAction";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Toastify from "../../components/ToastServices";
import validate, { type } from "../../helper/JoiSchemaValidation";
import LoginSVG from "../../static/undraw/lighthouse.svg";

function ResendVerification() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validate: (v) => {
            return validate(type.EMAIL, v);
        },
        onSubmit: (v) => {
            Toastify(resentActivation(v), {
                pending: "Processing Email Sending",
                onSuccess: () => "Email Sent",
                onError: (data) => {
                    formik.setErrors(data?.response?.data?.errors || {});
                    return data?.response?.data?.error || "An Unexpected Error Happended";
                },
            });
        },
    });
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            <div
                className="flex items-center w-9/12 flex-col my-32 md:my-0
                shadow-lg rounded-lg p-6 relative bg-white md:flex-row">
                <div
                    className="shadow-2xl mx-auto shadow-violet-600/30 
                    p-4 -mt-28 mb-5 w-full lg:w-8/12 md:-ml-28 md:mr-10 md:my-0
                    bg-white  rounded-2xl">
                    <img src={LoginSVG} alt="login SVG" className="mx-auto aspect-auto" />
                </div>
                <form className="w-full lg:w-8/12 ">
                    <h2 className="text-center mb-10 text-violet-600 font-semibold text-2xl font-mono">
                        Zen Query Ticketing System
                    </h2>
                    <h2 className="text-center mb-10 text-amber-600 font-semibold text-xl font-mono">
                        Resend Verification Token
                    </h2>
                    <Input type="email" name="email" id="email" label="Email" formik={formik} />

                    <FormAction formik={formik} actionLabel="Resend Verification" />
                    <div className="flex justify-end mt-5">
                        <Link path={"/login"}>Already had an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResendVerification;
