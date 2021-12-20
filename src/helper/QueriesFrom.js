export const statusType = [
    { value: 1, name: "Unassigned" },
    { value: 2, name: "Assigned" },
    { value: 3, name: "Resolved" },
    { value: 4, name: "Closed" },
    { value: 5, name: "Transferred" },
    { value: 6, name: "Approval Pending" },
    { value: 7, name: "Approved" },
    { value: 101, name: "Created" },
    { value: 102, name: "Dropped" },
    { value: 103, name: "Re-opened" },
];

export const teams = [
    { value: 1, name: "Mentor" },
    { value: 2, name: "Coordinator" },
    { value: 3, name: "Placement" },
    { value: 4, name: "Payments" },
    { value: 5, name: "Accounts" },
    { value: 6, name: "Sales" },
];

export const communicationModes = [
    { key: "E-Mail", value: "email" },
    { key: "Phone", value: "phone" },
];

export const phoneCommunicationModes = [
    { key: "WhatsApp", value: "whatsApp" },
    { key: "Message", value: "message" },
    { key: "Call", value: "call" },
];

const tags = ["HTML", "CSS", "JS", "React", "Node", "Frontend", "Backend", "Mongo DB", "AWS"];

export const status = ["ASSIGNED", "UNASSIGNED", "OPEN", "CLOSE", "REOPEN"];

export const preferredLanguage = ["Tamil", "English", "Hindi"];

export const categoryData = [
    {
        _id: 1,
        name: "Zen-Class Doubt",
        subCategory: [
            {
                _id: 101,
                name: "Task",
            },
            {
                _id: 102,
                name: "Hackathon",
            },
            {
                _id: 103,
                name: "Class Topic",
            },
        ],
        tags,
    },
    {
        _id: 2,
        name: "Placement Related",
        subCategory: [],
    },
    {
        _id: 3,
        name: "Coordination Related",
        subCategory: [
            {
                _id: 301,
                name: "Session Timing",
            },
            {
                _id: 302,
                name: "Session Joining Link",
            },
            {
                _id: 303,
                name: "Session Feedback",
            },
            {
                _id: 304,
                name: "Completion Certificate",
            },
            {
                _id: 305,
                name: "Payment",
            },
        ],
    },
    {
        _id: 4,
        name: "Pre-Bootcamp Related",
        subCategory: [
            {
                _id: 401,
                name: "Session",
            },
            {
                _id: 402,
                name: "Payment",
            },
            {
                _id: 403,
                name: "CodeKata",
            },
            {
                _id: 404,
                name: "WebKata",
            },
            {
                _id: 405,
                name: "Task",
            },
            {
                _id: 406,
                name: "Other",
            },
        ],
    },
];
