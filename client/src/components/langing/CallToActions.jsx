import React from 'react'
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from 'react-router-dom';
const CallToActions = () => {
  return (
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">

    <div className="max-w-6xl mx-auto border border-dashed border-blue-200 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 to-white">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 lg:px-14 py-14">

        {/* Left Content */}
        <div className="text-center lg:text-left max-w-2xl">

          <div className="inline-flex items-center gap-2 
          bg-blue-100 border border-blue-200 
          rounded-full px-4 py-2 mb-5">

            <Sparkles className="w-4 h-4 text-blue-600" />

            <span className="text-xs sm:text-sm font-medium text-blue-700">
              AI-Powered Resume Builder
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl 
          font-bold text-zinc-900 leading-tight mb-4">

            Build Your Dream Resume
            <span className="text-blue-600"> In Minutes</span>

          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
            Create ATS-friendly resumes with AI-generated content, beautiful templates,
            and smart suggestions designed to help you land more interviews faster.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/app"
          className="group flex items-center gap-2 rounded-xl 
          py-3.5 px-7 sm:px-8
          bg-blue-600 hover:bg-blue-700 
          transition-all duration-300 
          text-white font-medium shadow-lg hover:shadow-blue-200"
        >
          <span>Create Resume</span>

          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>
    </div>
  </div>
  )
}

export default CallToActions
