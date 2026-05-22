import { Plus, Sparkles, Trash2, Loader2 } from "lucide-react";
import React, { useState } from "react";
import SaveAndContinue from "../SaveAndContinue";
import api from "@/api/axios";

const formField = {
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  description: "",
  is_current: false,
};

const Experience = ({ data, setData, nextTab }) => {
  const [loadingIndex, setLoadingIndex] = useState(null);

  
  const [options, setOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);


  const addExperience = () => {
    setData({
      ...data,
      experience: [...(data.experience || []), formField],
    });
  };


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

  const enhanceExperience = async (index) => {
    try {
      setLoadingIndex(index);
      setActiveIndex(index);

      const item = data.experience[index];

      const res = await api.post("/ai/experience", {
        text: item.description,
        position: item.position,
        company: item.company,
      });

      setOptions(res.data.result);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingIndex(null);
    }
  };

  const applyOption = (text) => {
    const updated = [...data.experience];

    updated[activeIndex].description = text;

    setData({
      ...data,
      experience: updated,
    });

    setShowModal(false);
  };


const saveExperience = async () => {
  try {

    const response = await api.put(
      `/resume/${data._id}/section`,
      {
        experience: data.experience,
      }
    );



    nextTab();

  } catch (error) {
    console.log(error);
  }

};

  return (
    <div className="space-y-5">
      {/* Header */}
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

     
      <div className="space-y-6">
        {data.experience?.map((item, index) => (
          <div key={index} className="border rounded-xl p-5 shadow-sm bg-white">

            {/* Top */}
            <div className="flex justify-between mb-3">
              <h1 className="text-xl">Experience #{index + 1}</h1>

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
                onChange={(e) => handleChange(index, e)}
              />

              <input
                className="border p-2 rounded-lg"
                placeholder="Company Name"
                name="company"
                value={item.company}
                onChange={(e) => handleChange(index, e)}
              />

              <input
                className="border p-2 rounded-lg"
                type="date"
                name="start_date"
                value={item.start_date}
                onChange={(e) => handleChange(index, e)}
              />

              <input
                className="border p-2 rounded-lg"
                type="date"
                name="end_date"
                value={item.end_date}
                onChange={(e) => handleChange(index, e)}
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_current"
                  checked={item.is_current}
                  onChange={(e) => handleChange(index, e)}
                />
                <label>Currently Working Here</label>
              </div>
            </div>

      
            <div className="flex justify-end mt-3">
              <button
                onClick={() => enhanceExperience(index)}
                disabled={loadingIndex === index}
                className="flex items-center gap-2 px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition disabled:opacity-50"
              >
                {loadingIndex === index ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    AI Enhance
                  </>
                )}
              </button>
            </div>

  
            <textarea
              className="border p-3 rounded-lg w-full mt-4"
              rows={4}
              placeholder="Describe your responsibilities and achievements..."
              name="description"
              value={item.description}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}

        <SaveAndContinue onSave={saveExperience} />
      </div>


      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[600px] max-h-[80vh] overflow-auto p-5 rounded-xl space-y-4">

            <h2 className="text-lg font-semibold">
              Choose AI Variation
            </h2>

            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => applyOption(opt.text)}
                className="border p-3 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <p className="text-sm whitespace-pre-line">
                  {opt.text}
                </p>
              </div>
            ))}

            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-red-500 mt-2"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;