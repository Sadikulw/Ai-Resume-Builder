import React from "react";
import {
  Sparkles,
  FileText,
  Zap,
  Palette,
  Brain,
  Smartphone,
  ShieldCheck,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Generator",
    description:
      "Instantly generate professional resumes with AI-powered writing assistance tailored to your career goals.",
  },
  {
    icon: FileText,
    title: "ATS-Friendly Templates",
    description:
      "Choose from modern resume templates optimized for ATS systems and recruiter visibility.",
  },
  {
    icon: Zap,
    title: "Fast Resume Creation",
    description:
      "Build a complete resume in minutes with smart suggestions and auto-filled sections.",
  },
  {
    icon: Palette,
    title: "Beautiful Designs",
    description:
      "Create clean and professional resumes with elegant layouts and customizable styles.",
  },
  {
    icon: Brain,
    title: "Smart AI Suggestions",
    description:
      "Improve your summary, skills, and experience with intelligent AI recommendations.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Build and edit resumes smoothly on desktop, tablet, and mobile devices.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Your personal information stays protected with secure and reliable systems.",
  },
  {
    icon: Download,
    title: "One-Click Download",
    description:
      "Export your resume instantly in high-quality PDF format ready for job applications.",
  },
];

const Feature = () => {
  return (
    <section id="features" className="w-full bg-white py-14 sm:py-16 md:py-20">
      <div className="w-full flex justify-center">
  
  <div
    className="inline-flex items-center gap-2 
    bg-blue-100/70 border border-blue-200 
    text-blue-800 rounded-full 
    px-4 py-2 mb-20
    text-xs sm:text-sm font-medium 
    backdrop-blur-sm"
  >
    <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center">
      <Zap className="w-3 h-3 text-blue-700 fill-blue-700" />
    </div>

    <span>Trusted by 10,000+ job seekers</span>
  </div>

</div>
      
      {/* Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">

        {/* Heading */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            Build a Professional Resume with AI
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Create modern, ATS-friendly resumes in minutes using powerful AI
            tools. Generate content, improve wording, customize templates, and
            land your dream job faster.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          border
          border-zinc-200
          overflow-hidden
          rounded-2xl
        "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                group
                relative
                p-5
                sm:p-6
                md:p-7
                border-b
                sm:border-r
                border-zinc-200
                bg-white
                hover:bg-gradient-to-b
                hover:from-white
                hover:to-blue-50
                transition-all
                duration-300
                hover:shadow-sm
              "
              >
                {/* Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-zinc-800 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;