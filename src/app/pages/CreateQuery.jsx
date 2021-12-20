import React from "react";
import { useFormik } from "formik";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/TextArea";

import { categoryData } from "../../helper/QueriesFrom";
import validate, { type } from "../../helper/JoiSchemaValidation";
import FormAction from "../../components/FormAction";
import { createQuery } from "../../apis/QueryApi";
import Toastify from "../../components/ToastServices";
import { useHistory } from "react-router-dom";
import useQueryContext from "../../context/QueryContext";
import useSocketContext from "../../context/SocketContext";

const Title = ({ children }) => (
    <h2 className="text-violet-900 font-semibold py-5 self-start">{children}</h2>
);

function CreateQuery() {
    const history = useHistory();
    const { createQuery: socketCreateQuery } = useSocketContext();

    const formik = useFormik({
        initialValues: {
            category: "",
            subCategory: "",
            tags: [],
            preferredLanguage: "",
            title: "",
            description: "",
            from: "09:00",
            till: "19:00",
        },
        validate: (v) => {
            return validate(type.QUERY_DETAILS, v);
        },
        onSubmit: async (value) => {
            const v = { ...value };
            v.availableTime = {};
            v.availableTime.from = v.from;
            v.availableTime.till = v.till;
            Toastify(createQuery(v), {
                pending: "Processing Query",
                onSuccess: ({ data }) => {
                    // console.log(data);
                    const {
                        success: { query },
                    } = data;
                    socketCreateQuery({ query });
                    history.push("/");
                    return "Query Created";
                },
                onError: (data) => {
                    formik.setErrors(data?.response?.data?.errors || {});
                    return data?.response?.data?.error || "An Unexpected Error Happended";
                },
            });
        },
    });

    const category = categoryData.find((v) => v.name === formik.values.category);

    return (
        <div className="bg-gray-50 flex justify-center">
            <div
                className="bg-white 
            flex flex-col 
            shadow-lg rounded-xl 
            p-10 sm:mx-auto my-10 mx-5 
            lg:w-8/12 sm:w-10/12 w-full">
                <Title>Topic</Title>
                <div className="self-center sm:w-3/6 w-5/6 ">
                    <Select name="category" id="category" label="Category" formik={formik}>
                        {categoryData.map((c) => (
                            <option value={c.name} key={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </Select>
                    {category?.subCategory.length > 0 && (
                        <Select
                            label="Sub Category"
                            name="subCategory"
                            id="subCategory"
                            formik={formik}>
                            {category?.subCategory?.map((s) => (
                                <option value={s.name} key={s._id}>
                                    {s.name}
                                </option>
                            ))}
                        </Select>
                    )}
                    {category?.tags?.length > 0 && (
                        <Select
                            multiple
                            size={5}
                            label="Tags"
                            name="tags"
                            id="tags"
                            formik={formik}>
                            {category?.tags?.map((tag, i) => (
                                <option value={tag} key={i}>
                                    {tag}
                                </option>
                            ))}
                        </Select>
                    )}
                    <Select
                        label="Preferred Language"
                        name="preferredLanguage"
                        id="preferred Language"
                        formik={formik}>
                        {["Tamil", "English", "Hindi"].map((l, i) => (
                            <option value={l} key={i}>
                                {l}
                            </option>
                        ))}
                    </Select>
                </div>
                <Title>Details</Title>
                <div className="self-center sm:w-3/6 w-5/6 ">
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        label="Title"
                        formik={formik}
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <Textarea
                        name="description"
                        id="description"
                        label="Description"
                        formik={formik}
                    />
                </div>
                <Title>Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</Title>
                <div className="self-center sm:w-3/6 w-5/6 ">
                    <Input type="time" label="From" name="from" id="from" formik={formik} />
                    <Input type="time" label="Till" name="till" id="till" formik={formik} />
                </div>
                <FormAction formik={formik} actionLabel="Create" secondaryLabel="Clear" />
            </div>
        </div>
    );
}

export default CreateQuery;
