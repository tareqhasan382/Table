import React from "react";
import Table from "./Table";
const Sidebar = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/6 lg:px-10 lg:pt-10 xs:pt-5 bg-gray-600">
        <div className="w-full justify-around flex lg:flex-col xs:flex-row lg:gap-20 xs:gap-10 ">
          <button className="w-30 bg-red-500 rounded p-2 my-2">DashBoard </button>
          <button className="w-30 bg-red-500 rounded p-2 my-2">Home</button>
          <button className="w-30 bg-red-500 rounded p-2 my-2">Analytics</button>
          <button className="w-30 bg-red-500 rounded p-2 my-2">Sales</button>
        </div>
      </div>
      <div className="w-full"><Table/> </div>
    </div>
  );
};

export default Sidebar;
