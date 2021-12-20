import React from "react";
import { MdSend } from "react-icons/md";

function ChatSend({ formik }) {
    return (
        <form onSubmit={formik.handleSubmit}>
            <div
                className={`flex  border items-center p-4 gap-4
                bottom-0 left-0 right-0 bg-gray-200`}>
                <input
                    rows={1}
                    name="content"
                    id="content"
                    className="w-full border-0 rounded-full p-2 px-5"
                    placeholder="Send Message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.content}
                />
                <button
                    type="submit"
                    className=" bg-blue-500 p-3  text-white 
                    cursor-pointer
                    flex items-center gap-2 rounded-full">
                    <MdSend className="text-xl" />
                </button>
            </div>
        </form>
    );
}

export default ChatSend;
