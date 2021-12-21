import { useFormik } from "formik";
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatSend from "./ChatSend";
import useAppContext from "../context/AppContext";
import useSocketContext from "../context/SocketContext";
import { useParams } from "react-router-dom";

function Chat({ converstation }) {
    const { addNewMessage } = useSocketContext();
    const { converstationId } = useParams();
    const { user } = useAppContext();
    const formik = useFormik({
        initialValues: {
            content: "",
        },
        validate: (v) => {
            if (!v.content) return { content: "Content is required" };
        },
        onSubmit: (v) => {
            addNewMessage({
                id: converstationId,
                message: { content: v.content, from: user.id },
            });
            formik.resetForm();
        },
    });
    return (
        <>
            <ChatHeader />
            <ChatMessage messages={converstation?.messages || []} />
            <ChatSend formik={formik} />
        </>
    );
}

export default Chat;
