import React, { useEffect } from "react";
import Toastify from "../../components/ToastServices";
import { verifyUser } from "../../apis/AuthApi";
import { useParams } from "react-router-dom";

function VerifyUser() {
    const { token } = useParams();

    useEffect(() => {
        Toastify(verifyUser(token), {
            pending: "Processing User Verification",
            onSuccess: () => "User Verified Successfully",
            onError: (data) => {
                return data?.response?.data?.error || "An Unexpected Error Happended";
            },
        });
    }, []);
    return <p>verify user</p>;
}

export default VerifyUser;
