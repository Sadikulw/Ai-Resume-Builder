import { Plus, Sparkles, X } from "lucide-react";
import React, { useState } from "react";


const Skills = ({ data, setData }) => {
  const [skillInput, setSkillInput] = useState("");

  // Add Skill
  const addSkill = () => {
    if (!skillInput.trim()) return;

    const newSkills = [...(data.skills || []), skillInput];

    setData({
      ...data,
      skills: newSkills,
    });

    setSkillInput("");
  };

  // Remove Skill
  const removeSkill = (index) => {
    const updatedSkills = data.skills.filter((_, i) => i !== index);

    setData({
      ...data,
      skills: updatedSkills,
    });
  };

  return (
    <div>
      <div className="space-y-5">
        {/* Top */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Skills</h2>

            <p className="text-sm text-gray-500">
              Add your technical and soft skills
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="mt-4 flex flex-wrap gap-2 items-center">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Enter a skill (e.g., JavaScript)"
          className="flex-1 border rounded-lg p-2 outline-none hover:border-blue-500 focus:border-blue-500 transition-all"
        />

        <button
          onClick={addSkill}
          className="bg-blue-500 flex items-center gap-2 py-2 px-4 text-white rounded-md hover:scale-105 transition-all duration-200"
        >
          <Plus size={18} />
          Add
        </button>
      </div>

  
     {data.skills?.length > 0 ? (
    <div className="flex flex-wrap gap-3 mt-5">
      {data.skills.map((skill, index) => (
        <div
          key={index}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-2"
        >
          {skill}

          <button onClick={() => removeSkill(index)}>
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  ) : <div className="flex flex-col items-center mt-10 ">
    <Sparkles size={45} className="text-gray-300  mb-5"/>
    <h1 className="text-gray-400  font-semibold">No skills added yet.</h1>
    <p className="text-gray-400  ">Add your technical and soft skills above.</p>
  </div>
}
<div className=" mt-20 border py-5 px-4 border-blue-100  rounded-xl bg-blue-100 text-blue-500">
  <p><span className="font-bold">Tip:</span> Add 8-12 relevant skills. Include both technical skills (programming languages, tools) and soft skills (leadership, communication).</p>
</div>
 
    </div>
  );
};

export default Skills;