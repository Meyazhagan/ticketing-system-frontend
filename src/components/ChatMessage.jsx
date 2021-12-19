import React from "react";
import { FaUserCircle } from "react-icons/fa";

function ChatMessage() {
    return (
        <div className="p-8 flex flex-col">
            <div className="flex items-start my-4 self-start">
                <FaUserCircle className="text-purple-800" />
                <div className=" mx-2 bg-purple-50 border p-3 rounded-[0px_15px_15px]">
                    <div>
                        Kindly refer to the URL https://www.postman.com/api-documentation-tool/
                    </div>
                    <div className="font-mono font-light text-sm text-right mt-4">
                        Nov 06, 03:31 PM
                    </div>
                </div>
            </div>
            <div className="flex items-start self-end ">
                <div className=" mx-2 bg-white border p-3 rounded-[15px_0px_15px_15px]">
                    <div className="">
                        Kindly hello to the URL https://www.postman.com/api-documentation-tool/
                    </div>
                    <div className="font-mono font-light text-sm text-left mt-4">
                        Nov 06, 03:31 PM
                    </div>
                </div>
                <FaUserCircle className="text-green" />
            </div>
        </div>
    );
}

export default ChatMessage;
