import { UserButton } from "@clerk/clerk-react";
import React from "react";
import AddResumeBox from "../dashboard/AddResumeBox";

const DashboardPage = ({setTitle}) => {
  return (
    <div  className=" px-24 py-6">
      <div className=" mb-10">
        
        <h1 className=" font-bold   text-2xl pb-2"> My Resume </h1>
        <p className=" text-gray-500 text-sm">Start Creating Ai Resume to your next Job role</p>
      </div>
      <div>
        <AddResumeBox setTitle={setTitle}/>
      </div>
    </div>
  );
};

export default DashboardPage;
