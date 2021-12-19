import Joi from "joi-browser";

export const type = {
    QUERY_DETAILS: "QUERY_DETAILS",
    LOGIN: "LOGIN",
    EMAIL: "EMAIL",
    USER: "USER",
    PASSWORD: "PASSWORD",
};

const schema = {
    QUERY_DETAILS: Joi.object({
        title: Joi.string().min(5).required().label("Title"),
        description: Joi.string().min(5).required().label("Description"),
        category: Joi.string().required().label("Category"),
        preferredLanguage: Joi.string().required().label("Preferred Language"),
        subCategory: Joi.string().allow(""),
        tags: Joi.array().items(Joi.string()),
        from: Joi.string().required().label("From"),
        till: Joi.string().required().label("Till"),
    }),
    LOGIN: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
    EMAIL: Joi.object({
        email: Joi.string().email().required(),
    }),
    PASSWORD: Joi.object({
        password: Joi.string().required(),
        conformPassword: Joi.ref("password"),
    }),

    USER: Joi.object({
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required(),
        conformPassword: Joi.ref("password"),
        address: {
            street: Joi.string(),
            city: Joi.string(),
            state: Joi.string(),
            zip: Joi.string(),
        },
    }),
};

const getErrors = (error) =>
    error.details.reduce((acc, { path, message }) => {
        return { ...acc, [path.join("-")]: message };
    }, {});

export default function validate(type, data) {
    const option = { abortEarly: false };
    const { error } = schema[type]?.validate(data, option);

    if (error) return getErrors(error);

    return {};
}
