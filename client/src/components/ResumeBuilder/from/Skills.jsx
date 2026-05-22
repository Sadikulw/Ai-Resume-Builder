import { Plus, Sparkles, X, Loader2 } from "lucide-react";
import React, { useState } from "react";
import api from "@/api/axios";

const Skills = ({ data, setData }) => {

  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Add Skill
  const addSkill = () => {

    const trimmedSkill = skillInput.trim();

    if (!trimmedSkill) return;

    // Prevent duplicate skill
    if (
      data.skills?.includes(trimmedSkill)
    ) {
      return;
    }

    const newSkills = [
      ...(data.skills || []),
      trimmedSkill,
    ];

    setData({
      ...data,
      skills: newSkills,
    });

    setSkillInput("");
  };

  // Remove Skill
  const removeSkill = (index) => {

    const updatedSkills =
      data.skills.filter((_, i) => i !== index);

    setData({
      ...data,
      skills: updatedSkills,
    });
  };

  // Save Skills
  const saveSkills = async () => {
console.log(data)
    try {

      setLoading(true);

      await api.put(
        `/resume/${data._id}/section`,
        {
          skills: data.skills,
        }
      );

      console.log("Skills Saved");

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* Top */}
      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold">
            Skills
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your technical and soft skills
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="flex flex-wrap gap-3 items-center">

        <input
          type="text"
          value={skillInput}
          onChange={(e) =>
            setSkillInput(e.target.value)
          }

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addSkill();
            }
          }}

          placeholder="Enter a skill (e.g. React)"
          className="
            flex-1
            border
            rounded-xl
            p-3
            outline-none
            focus:border-blue-500
            transition-all
          "
        />

        <button
          onClick={addSkill}
          className="
            bg-blue-500
            hover:bg-blue-600
            text-white
            px-5
            py-3
            rounded-xl
            flex
            items-center
            gap-2
            transition-all
          "
        >
          <Plus size={18} />
          Add
        </button>
      </div>

      {/* Skills List */}
      {data.skills?.length > 0 ? (

        <div className="flex flex-wrap gap-3">

          {data.skills.map((skill, index) => (

            <div
              key={index}
              className="
                bg-blue-100
                text-blue-700
                px-4
                py-2
                rounded-full
                flex
                items-center
                gap-2
                hover:scale-105
                transition-all
              "
            >
              {skill}

              <button
                onClick={() =>
                  removeSkill(index)
                }
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>

      ) : (

        <div className="flex flex-col items-center mt-10">

          <Sparkles
            size={45}
            className="text-gray-300 mb-5"
          />

          <h1 className="text-gray-400 font-semibold">
            No skills added yet.
          </h1>

          <p className="text-gray-400">
            Add your technical and soft skills above.
          </p>
        </div>
      )}

      {/* Tip */}
      <div
        className="
          border
          border-blue-200
          bg-blue-50
          text-blue-600
          rounded-2xl
          p-5
        "
      >
        <p>
          <span className="font-bold">
            Tip:
          </span>{" "}
          Add 8-12 relevant skills including
          technical and soft skills.
        </p>
      </div>

      {/* Save Button */}
      <button
        onClick={saveSkills}
        disabled={loading}
        className="
          mt-4
          bg-green-500
          hover:bg-green-600
          text-white
          px-6
          py-3
          rounded-xl
          transition-all
          flex
          items-center
          gap-2
        "
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Saving...
          </>
        ) : (
          "Save Skills"
        )}
      </button>
    </div>
  );
};

export default Skills;