import ResumeBuilderFrom from "@/components/ResumeBuilder/ResumeBuilderFrom";
import ResumeBuilderPreview from "@/components/ResumeBuilder/ResumeBuilderPreview";
import React, { useEffect, useState } from "react";


import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import api from "@/api/axios";
import { useNavigate } from "react-router-dom";
const ResumeBuilder = ({ title = "Resume Builder" }) => {
  
  const [accentColor, setAccentColor] = useState("");
  const [templates, setTemplates] = useState("");
  const [dowloadeOpen, setDowloadeOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    projects: [],
    skills: [],
    templates:"",
    accentColor:"",
  });
  const handleSheare = () => {
    navigator.share({ url: window.location.href, text: "Resume" });
  };

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await api.get(`/resume/${id}`);

        setData(response.data);
         setTemplates(response.data.templates)
      setAccentColor(response.data.accentColor)
      } catch (error) {
        console.log(error);
      }
    };

    fetchResume();
  }, [id]);

  useEffect(() => {
    document.title = data.title || title;
  }, []);
  const saveResume=async()=>{
    
    try {
     const  response=await api.put(`/resume/${id}/section`,{
        accentColor:accentColor,
        templates:templates,
      })
     
      navigate(`/app/resume/${id}/perview`)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600 transition-all mb-4"
            >
              <ArrowLeft className="size-4" />
              Back to Dashboard
            </Link>
          </div>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl shadow-sm transition-all duration-200 font-medium w-fit"
            onClick={saveResume}
          >
            Save Resume
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-10"></div>

            <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/60 backdrop-blur-lg">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Resume Details
                  </h2>

                  <p className="text-sm text-gray-500">
                    Fill all sections carefully
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-400"></div>
                  <div className="size-3 rounded-full bg-yellow-400"></div>
                  <div className="size-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 max-h-[85vh] overflow-y-auto">
                <ResumeBuilderFrom
                  data={data}
                  setData={setData}
                  setTemplates={setTemplates}
                  setAccentColor={setAccentColor}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="sticky top-4 h-fit">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-10"></div>

              <div className="relative bg-white/90 backdrop-blur-xl border  border-white/50 shadow-xl rounded-3xl overflow-hidden">
                {/* Preview Header */}

                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/60 backdrop-blur-lg">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Live Preview
                    </h2>

                    <p className="text-sm text-gray-500">
                      Your resume updates instantly
                    </p>
                  </div>

                  <div className="bg-cyan-100 text-cyan-700 text-sm font-medium px-3 py-1 rounded-full">
                    {templates} Template
                  </div>
               
                </div>
                {/* Download  Feature*/}
               

                {/* Preview */}
                <div
                  className="p-6 overflow-auto max-h-[85vh] bg-gray-50"
                  id="resume-preview"
                >
                  <ResumeBuilderPreview
                    data={data}
                    accentColor={accentColor}
                    templates={templates}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
