import { Plus, Sparkles, Trash2 } from "lucide-react";
import React, { useState } from "react";
import SaveAndContinue from "../SaveAndContinue";

const formField = {
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  description: "",
  is_current: false,
};

const Experience = ({ data, setData,nextTab }) => {
  // Add Experience
  const addExperience = () => {
    setData({
      ...data,
      experience: [...(data.experience || []), formField],
    });
  };

  // Handle Change
  const handleChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newEntries = [...data.experience];

    newEntries[index] = {
      ...newEntries[index],
      [name]: type === "checkbox" ? checked : value,
      ...(name === "is_current" && checked ? { end_date: "" } : {}),
    };

    setData({
      ...data,
      experience: newEntries,
    });
  };

  const removeExperience = (index) => {
    const newEntries = data.experience.filter((_, i) => i !== index);

    setData({
      ...data,
      experience: newEntries,
    });
  };

  return (
    <div className="space-y-5">
      {/* Top */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Professional Experience</h2>

          <p className="text-sm text-gray-500">Add your work experience</p>
        </div>

        <button
          onClick={addExperience}
          className="bg-blue-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add Experience
        </button>
      </div>

      {/* Experience List */}
      <div className="space-y-6">
        {data.experience?.map((item, index) => (
          <div key={index} className="border rounded-xl p-5 shadow-sm bg-white">
            <div className="flex justify-between mb-3">
              <h1 className=" text-xl">Experience#{index + 1}</h1>
              <button
                onClick={() => removeExperience(index)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border p-2 rounded-lg"
                placeholder="Position Title"
                name="position"
                value={item.position}
                onChange={(event) => handleChange(index, event)}
              />

              <input
                className="border p-2 rounded-lg"
                placeholder="Company Name"
                name="company"
                value={item.company}
                onChange={(event) => handleChange(index, event)}
              />

              <input
                className="border p-2 rounded-lg"
                type="date"
                name="start_date"
                value={item.start_date}
                onChange={(event) => handleChange(index, event)}
              />

              <input
                className="border p-2 rounded-lg"
                type="date"
                name="end_date"
                value={item.end_date}
                onChange={(event) => handleChange(index, event)}
              />
              <div className="flex  items-center  gap-3">
                <input
                  type="checkbox"
                  name="is_current"
                  checked={item.is_current}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                />
                <label>Currently Working Here</label>
              </div>
            </div>
            <div className="flex justify-end"> <button className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
              {" "}
              <Sparkles size={20} /> AI Enhance
            </button></div>
           
            <textarea
              className="border p-3 rounded-lg w-full mt-4"
              rows={4}
              placeholder="Describe your key responsibilities and achievements.."
              name="description"
              value={item.description}
              onChange={(event) => handleChange(index, event)}
            />
          </div>
        ))}
        <SaveAndContinue nextTab={nextTab}/>
      </div>
    </div>
  );
};

export default Experience;
