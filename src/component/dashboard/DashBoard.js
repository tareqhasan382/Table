import React, { useState } from "react";
import Topbar from "./Topbar";
import Table from "./Table";
import Footer from "../../shared/Footer";

const DashBoard = () => {
  const [query, setQuery] = useState("");

  //console.log(query);

  return (
    <div className="w-full">
      <Topbar query={query} setQuery={setQuery} />
      <Table query={query}  />
      <Footer/>
    </div>
  );
};

export default DashBoard;

/*
<div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">
        <Table/>
      </div>



      <div className="w-full xs:mx-3">
        <Table/>
      </div>



className="lg:w-full flex lg:flex-row xs:flex-col"

<div className=" lg:w-1/6 xs:w-full bg-red-400">
          <Sidebar />
        </div>

<div className="w-5/6">
       <div className=""><Table/></div> 
</div>

*/
