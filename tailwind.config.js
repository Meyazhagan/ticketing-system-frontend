module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx}", "./*.html"],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            scrollbar: ["dark", "rounded"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
