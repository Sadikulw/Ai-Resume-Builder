import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from "@/api/axios";
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import MinimalImageTemplate from './templates/MinimalImageTemplate';
const PreviewResume = () => {
  const {id}=useParams()
  const [resumeData,setResumeData]=useState([])
 
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await api.get(`/resume/${id}`);

        setResumeData(response.data);
        console.log(response.data)  
      } catch (error) {
        console.log(error);
      }
    };

    fetchResume();
  }, [id]);

  const renderTemplate = () => {
    switch (resumeData.templates) {
      case "classic":
        return <ClassicTemplate data={resumeData} accentColor={resumeData.accentColor} />;
      case "modern":
        return <ModernTemplate data={resumeData} accentColor={resumeData.accentColor} />;
      case "minimal":
        return <MinimalTemplate data={resumeData} accentColor={resumeData.accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={resumeData} accentColor={resumeData.accentColor} />;
      default:
        return <ClassicTemplate data={resumeData} accentColor={resumeData.accentColor} />;
    }
  };
  return (
    <div    className="bg-white mx-auto  h-auto mt-3 shadow-2xl rounded-xl overflow-hidden"
  style={{
    width: "210mm",
    padding: "20mm",
  }}>{renderTemplate()}
 </div>
     )
}

export default PreviewResume
