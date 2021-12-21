import React from "react";
import { FaUserCircle } from "react-icons/fa";
import useAppContext from "../context/AppContext";
import classNames from "classnames";
import { getDate } from "../helper/getTimeStamp";

const Message = ({ message, user }) => {
    const self = user.id === message.from;
    return (
        <div
            className={classNames("items-center group  mt-2 flex w-full", {
                "self-start": !self,
                "self-end flex-row-reverse": self,
            })}>
            <div className={classNames("flex ", { "flex-row-reverse": self })}>
                <FaUserCircle className="text-purple-800 flex-shrink-0" />
                <div
                    className={classNames(" mx-2  border p-3", {
                        "bg-purple-50 rounded-[0px_15px_15px]": !self,
                        "bg-white rounded-[15px_0px_15px_15px]": self,
                    })}>
                    <div>{message.content}</div>
                </div>
            </div>
            <div className="opacity-0 group-hover:opacity-70 transition-opacity font-mono font-light text-xs text-right">
                {getDate(message._id)}
            </div>
        </div>
    );
};

function ChatMessage({ messages }) {
    const { user } = useAppContext();

    return (
        // <div className="flex flex-col overflow-auto p-8 flex-grow ">
        <div
            className="flex-grow overflow-auto scrollbar-thumb-gray-400 
            scrollbar-track-transparent scrollbar-thin p-10 
            scrollbar-thumb-rounded">
            {messages.map((message, index) => (
                <Message message={message} user={user} key={index} />
            ))}
        </div>
    );
}

export default ChatMessage;
