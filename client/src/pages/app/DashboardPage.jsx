import React, { useEffect, useState } from "react";
import AddResumeBox from "../dashboard/AddResumeBox";
import api from "@/api/axios";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2, Eye } from "lucide-react";

const DashboardPage = ({ setTitle }) => {
  const { user } = useUser();

  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const fetchResume = async () => {
      try {
        const response = await api.get(`/resume?userId=${user.id}`);
      
        setResumes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResume();
  }, [user]);

  const colors = [
    "from-blue-500 to-blue-700",
    "from-red-500 to-pink-600",
    "from-green-500 to-emerald-700",
    "from-purple-500 to-indigo-700",
  ];

  const handleDelete = async (resumeId) => {
    try {
      await api.delete(`/resume/delete/${resumeId}`);

      setResumes((prevResumes) =>
        prevResumes.filter((resume) => resume._id !== resumeId)
      );
    } catch (error) {
      console.error("Error deleting resume:", error);
    }
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 py-8 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="font-bold text-3xl text-gray-800">
          My Resume
        </h1>

        <p className="text-gray-500 mt-2">
          Start creating your AI-powered resume for your next job role.
        </p>
      </div>

      {/* Add Resume */}
      <div>
        <AddResumeBox setTitle={setTitle} />
      </div>

      {/* Resume Cards */}
      <div className="flex flex-wrap gap-6 mt-12">
        {resumes.map((resume, index) => (
          <div
            key={resume._id}
            className={`
              h-auto
              w-56
              rounded-2xl
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              relative
              overflow-hidden
              text-white
              p-5
              flex
              flex-col
              justify-between
            `}
            style={{
    background: `linear-gradient(to bottom right, ${resume.accentColor}, #000000)`,
  }}  
            onClick={() =>
              navigate(`/app/resume/${resume._id}/perview`)
            }
          >
            {/* Top Icons */}
            <div className="flex justify-end gap-3 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`resume-builder/${resume._id}`);
                }}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
              >
                <Edit2 size={16} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(resume._id);
                }}
                className="bg-white/20 hover:bg-red-500 p-2 rounded-full transition"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {/* Resume Content */}
            <div>
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Eye size={28} />
              </div>

              <h2 className="font-bold text-xl leading-snug break-words">
                {resume.title}
              </h2>

              <p className="text-sm text-white/80 mt-3">
                Updated{" "}
                {new Date(resume.updatedAt).toLocaleDateString()}
              </p>
            </div>

            {/* Bottom Button */}
            <button
              className="mt-4 bg-white text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-100 transition"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/app/resume/${resume._id}/perview`);
              }}
            >
              View Resume
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;