import { toast } from "react-toastify";

export default function Toastify(promise, { pending, onSuccess, onError }, config) {
    toast.promise(
        promise,
        {
            pending,
            success: {
                render({ data }) {
                    return onSuccess(data);
                },
            },
            error: {
                render({ data }) {
                    return onError(data);
                },
            },
        },
        config
    );
}
