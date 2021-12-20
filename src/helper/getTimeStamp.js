import format from "date-fns/format";

const getTimeStamp = (id) => {
    if (!id) return "";
    const timestamp = ("" + id).toString().substring(0, 8);
    const date = new Date(parseInt(timestamp, 16) * 1000);
    return date.toLocaleString();
};

export const getDate = (id) => {
    if (!id) return "";
    const timestamp = ("" + id).toString().substring(0, 8);
    const date = new Date(parseInt(timestamp, 16) * 1000);

    return format(date, "LLL dd, hh:mm a");
};

export default getTimeStamp;
