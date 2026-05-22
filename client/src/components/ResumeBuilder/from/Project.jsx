import React, { useState } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";
import SaveAndContinue from "../SaveAndContinue";
import api from "@/api/axios";

const Project = ({ data, setData, nextTab }) => {

  const [loading, setLoading] = useState(false);

  // Add Project
  const addProject = () => {
    setData({
      ...data,
      projects: [
        ...(data.projects || []),
        {
          name: "",
          description: "",
        },
      ],
    });
  };

  // Handle Change
  const handleChange = (index, event) => {
    const updatedProjects = [...data.projects];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [event.target.name]: event.target.value,
    };

    setData({
      ...data,
      projects: updatedProjects,
    });
  };

  // Remove Project
  const removeProject = (index) => {
    const updatedProjects = data.projects.filter(
      (_, i) => i !== index
    );

    setData({
      ...data,
      projects: updatedProjects,
    });
  };

  // Save
  const saveProject = async () => {
    try {
      setLoading(true);

      await api.put(`/resume/${data._id}/section`, {
        projects: data.projects,
      });

      nextTab();

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
            Projects
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Add your best projects
          </p>
        </div>

        <button
          onClick={addProject}
          className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="space-y-5">
        {data.projects?.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-5 shadow-sm bg-white"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Project #{index + 1}
              </h2>

              <button
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">

              <input
                type="text"
                className="border p-3 rounded-xl w-full"
                placeholder="Project Name"
                name="name"
                value={item.name}
                onChange={(event) =>
                  handleChange(index, event)
                }
              />

              <textarea
                rows={4}
                className="border p-3 rounded-xl w-full"
                placeholder="Describe your project..."
                name="description"
                value={item.description}
                onChange={(event) =>
                  handleChange(index, event)
                }
              />
            </div>
          </div>
        ))}
      </div>

      {/* Save */}
      <SaveAndContinue
        onSave={saveProject}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="animate-spin" />
        ) : (
          "Save & Continue"
        )}
      </SaveAndContinue>
    </div>
  );
};

export default Project;