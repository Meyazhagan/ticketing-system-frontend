module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx}", "./*.html"],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
