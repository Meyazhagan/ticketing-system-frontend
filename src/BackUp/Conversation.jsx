// import React from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { FaUserCircle } from "react-icons/fa";
// import { MdSend } from "react-icons/md";
// import Query from "./Query";

// function Converstation() {
//     return (
//         <div className="min-w-max">
//             <div className="flex items-center justify-between px-20 min-w-max bg-blue-50 gap-10">
//                 <div className="m-4 whitespace-nowrap">Zen Query System</div>
//                 <div className="">
//                     <form
//                         className="flex items-center gap-4
//                         bg-white w-fit px-2 rounded-md border-gray-400
//                         focus:ring-1 hover:ring-1 border">
//                         <input
//                             type="text"
//                             name=""
//                             id=""
//                             className="bg-transparent border-none
//                             focus:ring-0"
//                         />
//                         <AiOutlineSearch className="text-gray-400" />
//                     </form>
//                 </div>
//                 <div>
//                     <ul className="flex items-center gap-10">
//                         <li>Home</li>
//                         <li>Query</li>
//                         <li className="whitespace-nowrap">Create Query</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="flex ">
//                 <div className="flex-shrink-0 overflow-y-auto h-[90vh] w-[50%] border-r-2 relative">
//                     <div className="w-full ">
//                         <div className="flex justify-end bg-white p-4">
//                             <div className="bg-green-50 font-semibold tracking-wider text-sm text-green-600 px-4 py-1 rounded-md">
//                                 Unassigned
//                             </div>
//                         </div>
//                         <div className="p-8 flex flex-col">
//                             <div className="flex items-start my-4 self-start">
//                                 <FaUserCircle className="text-purple-800" />
//                                 <div className=" mx-2 bg-purple-50 border p-3 rounded-[0px_15px_15px]">
//                                     <div>
//                                         Kindly refer to the URL
//                                         https://www.postman.com/api-documentation-tool/
//                                     </div>
//                                     <div className="font-mono font-light text-sm text-right mt-4">
//                                         Nov 06, 03:31 PM
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="flex items-start self-end ">
//                                 <div className=" mx-2 bg-white border p-3 rounded-[15px_0px_15px_15px]">
//                                     <div className="">
//                                         Kindly refer to the URL
//                                         https://www.postman.com/api-documentation-tool/
//                                     </div>
//                                     <div className="font-mono font-light text-sm text-left mt-4">
//                                         Nov 06, 03:31 PM
//                                     </div>
//                                 </div>
//                                 <FaUserCircle className="text-green" />
//                             </div>
//                         </div>
//                         <div
//                             className={`flex overflow-hidden border
//                             bottom-0 left-0 right-0  bg-slate-200
//                             absolute rounded-[10px_100px_100px_10px] mx-10`}>
//                             <input rows={1} name="" id="" className="w-full border-0 p-2 px-5" />
//                             <div
//                                 className=" bg-blue-500 px-8 py-2 text-white
//                             flex items-center gap-2">
//                                 <MdSend className="text-2xl" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="py-10 px-10 grid grid-cols-12 flex-shrink-0 w-[50%]">
//                     <div className="flex items-center justify-between col-span-full">
//                         <h2 className="text-indigo-900 opacity-90 text-xl font-semibold">
//                             QN2460 - How to create postman documentation?
//                         </h2>
//                     </div>
//                     <div className="bg-gray-200 h-[1px] col-span-full"></div>
//                     <div className="col-span-6">
//                         <h3 className="text-slate-500">Create at</h3>
//                         <div className="text-gray-700 text-sm">31/12/2021 - 12:38 PM</div>
//                     </div>
//                     <div className="col-span-6">
//                         <h3 className="text-slate-500">Assigned To</h3>
//                         <div className="text-gray-700 text-sm">Suman Gangopadhyay</div>
//                     </div>
//                     <div className="col-span-full">
//                         <h3 className="text-slate-500">Description</h3>
//                         <div className="text-gray-700 text-sm">
//                             How to create postman documentation?
//                         </div>
//                     </div>
//                     <div className="col-span-full">
//                         <h3 className="text-slate-500">Tags</h3>
//                         <div className="flex items-center gap-4 mt-2">
//                             <div className="bg-green-50 tracking-wider text-sm text-green-600 px-4 py-1 rounded-full">
//                                 Node JS
//                             </div>
//                             <div className="bg-green-50 tracking-wider text-sm text-green-600 px-4 py-1 rounded-full">
//                                 Backend
//                             </div>
//                             <div className="bg-green-50 tracking-wider text-sm text-green-600 px-4 py-1 rounded-full">
//                                 JS
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-span-6">
//                         <h3 className="text-slate-500">Category</h3>
//                         <div className="text-gray-700 text-sm">Zen-Class Doubt</div>
//                     </div>
//                     <div className="col-span-6">
//                         <h3 className="text-slate-500">Sub Category</h3>
//                         <div className="text-gray-700 text-sm">Task</div>
//                     </div>
//                     <div className="col-span-6">
//                         <h3 className="text-slate-500">Preferred Language:</h3>
//                         <div className="text-gray-700 text-sm"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Converstation;
