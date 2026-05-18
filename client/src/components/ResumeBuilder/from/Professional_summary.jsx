import { Sparkles } from "lucide-react";
import React from "react";
import SaveAndContinue from "../SaveAndContinue";

const Professional_summary = ({ data, setData,nextTab }) => {
  const handleChange = (value) => {

    setData({
      ...data,
      professional_summary: value,
      
    });
  };
  return (
    <div>
      {/* //topBar */}
      <div className=" flex justify-between items-center mt-5">
        <div>
          <h3 className=" text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className=" text-sm text-gray-600 ">
            Add summary for your resume here
          </p>
        </div>
        <button className=" bg-pink-400 flex items-center gap-2 hover:bg-pink-600 cursor-pointer text-white px-6 py-3 rounded-xl shadow-sm transition-all duration-200 font-medium w-fit">
          {" "}
          <Sparkles size={20} /> AI Enhance
        </button>
      </div>
      {/* //main-content */}
      <div className="mt-5">
  <textarea
    placeholder="Write your professional summary..."
    rows={7}
    className="w-full border border-gray-300 rounded-xl p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
  onChange={(e)=>handleChange(e.target.value)} value={data?.professional_summary || ""}/>
  <SaveAndContinue nextTab={nextTab}/>
</div>
    </div>
  );
};

export default Professional_summary;
