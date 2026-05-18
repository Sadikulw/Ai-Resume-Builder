import React, { useState } from "react";
import { Plus, Sparkles, Trash2 } from "lucide-react";
import SaveAndContinue from "../SaveAndContinue";
const formField = {
  name: "",
  description: "",
};
const Project = ({ data, setData,nextTab }) => {
  const addproject = () => {
    setData({
      ...data,
      project: [...(data.project || []), formField],
    });
  };

  const handleChange = (index, event) => {
    const newEntries = [...data.project];

    newEntries[index] = {
      ...newEntries[index],
      [event.target.name]: event.target.value,
    };

    setData({
      ...data,
      project: newEntries,
    });
  };

  const removeproject = (index) => {
    const newEntries = data.project.filter((_, i) => i !== index);

    setData({
      ...data,
      project: newEntries,
    });
  };

  return (
    <div>
      <div>
        <div className="space-y-5">
          {/* Top */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Project</h2>

              <p className="text-sm text-gray-500">Add your Project</p>
            </div>

            <button
              onClick={addproject}
              className="bg-blue-500 text-white px-5 py-3 rounded-xl flex items-center gap-2"
            >
              <Plus size={18} />
              Add project
            </button>
          </div>

          {/* project List */}
          <div className="space-y-6">
            {data.project?.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl p-5 shadow-sm bg-white"
              >
                <div className="flex justify-between mb-3">
                  <h1 className=" text-xl">project#{index + 1}</h1>
                  <button
                    onClick={() => removeproject(index)}
                    className="text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
                  <input
                    className="border p-2 rounded-lg"
                    placeholder=" Name"
                    name="name"
                    value={item.name}
                    onChange={(event) => handleChange(index, event)}
                  />

                  <textarea
                    className="border p-3 rounded-lg w-full mt-4"
                    rows={4}
                    placeholder="About your project"
                    name="description"
                    value={item.description}
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

export default Project;
