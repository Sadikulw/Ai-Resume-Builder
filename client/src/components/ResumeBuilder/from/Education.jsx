import React, { useState } from "react";
import { Plus, Sparkles, Trash2 } from "lucide-react";
import SaveAndContinue from "../SaveAndContinue";
const formField = {
  degree: "",
  institution: "",
  graduation_date: "",
  gpa: "",
  field: "",
};
const Education = ({ data, setData,nextTab }) => {
  const addeducation = () => {
    setData({
      ...data,
      education: [...(data.education || []), formField],
    });
  };


  const handleChange = (index, event) => {
    const newEntries = [...data.education];

    newEntries[index] = {
      ...newEntries[index],
        [event.target.name]: event.target.value
    };

    setData({
      ...data,
      education: newEntries,
    });
  };

  const removeeducation = (index) => {
    const newEntries = data.education.filter((_, i) => i !== index);

    setData({
      ...data,
      education: newEntries,
    });
  };
  return (
    <div>
      <div>
        <div className="space-y-5">
          {/* Top */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold"> Education
</h2>

              <p className="text-sm text-gray-500">Add your education details</p>
            </div>

            <button
              onClick={addeducation}
              className="bg-blue-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
            >
              <Plus size={18} />
              Add education
            </button>
          </div>

          {/* education List */}
          <div className="space-y-6">
            {data.education?.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 shadow-sm bg-white"
              >
                <div className="flex justify-between mb-3">
                  <h1 className=" text-xl">education#{index + 1}</h1>
                  <button
                    onClick={() => removeeducation(index)}
                    className="text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="border p-2 rounded-lg"
                    placeholder="Institution Name"
                    name="institution"
                    value={item.institution}
                    onChange={(event) => handleChange(index, event)}
                  />

                  <input
                    className="border p-2 rounded-lg"
                    placeholder="Degree(e.g..,Bachelor's,Master's)"
                    name="degree"
                    value={item.degree}
                    onChange={(event) => handleChange(index, event)}
                  />

                  <input
                    className="border p-2 rounded-lg"
                    name="field"
                    placeholder="field of Study"
                    value={item.field}
                    onChange={(event) => handleChange(index, event)}
                  />
                  
                  <input
                    className="border p-2 rounded-lg"
                    type="date"
                    
                    name="graduation_date"
                    value={item.graduation_date}
                    onChange={(event) => handleChange(index, event)}
                  />
                 <input
                    className="border p-2 rounded-lg"
                    placeholder="GPA (optional)"
                    name="gpa"
                    type="number"
                    value={item.gpa}
                    onChange={(event) => handleChange(index, event)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <SaveAndContinue nextTab={nextTab}/>
    </div>
  );
};

export default Education;
