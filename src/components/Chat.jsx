import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatSend from "./ChatSend";

function Chat() {
    return (
        <>
            <ChatHeader />
            <ChatMessage />
            <ChatSend />
        </>
    );
}

export default Chat;
