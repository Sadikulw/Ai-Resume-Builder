import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import Personal_info from "./from/Personal_info";
import Professional_summary from "./from/Professional_summary";
import Experience from "./from/Experience";
import Education from "./from/Education";
import Project from "./from/Project";
import Skills from "./from/Skills";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const themes = [
  {
    name: "Blue",
    color: "bg-blue-500",
    value: "#2563eb",
  },
  {
    name: "Green",
    color: "bg-green-500",
    value: "#16a34a",
  },
  {
    name: "Purple",
    color: "bg-purple-500",
    value: "#9333ea",
  },
  {
    name: "Pink",
    color: "bg-pink-500",
    value: "#ec4899",
  },
  {
    name: "Orange",
    color: "bg-orange-500",
    value: "#f97316",
  },
  {
    name: "Red",
    color: "bg-red-500",
    value: "#ef4444",
  },
  {
    name: "Black",
    color: "bg-black",
    value: "#000000",
  },
];
const templates = [
  {
    name: "Modern",
    value: "modern",
  },
  {
    name: "Classic",
    value: "classic",
  },
  {
    name: "Minimal",
    value: "minimal",
  },
  {
    name: "MinimalImage",
    value: "minimal-image",
  },
  
];

const ResumeBuilderFrom = ({ data, setData, setTemplates, setAccentColor }) => {


  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0].value);
  const totalTabs = 6;
  const [activeTab, setActiveTab] = useState(1);

  const progress = (activeTab / totalTabs) * 100;

  const nextTab = () => {
    setActiveTab((prev) => Math.min(prev + 1, totalTabs));
  };

  const prevTab = () => {
    setActiveTab((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="space-y-5">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
            backgroundColor: selectedTheme.value,
          }}
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={prevTab}
          disabled={activeTab === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
          ${
            activeTab === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <div className="text-sm font-medium text-gray-500">
          Step {activeTab} of {totalTabs}
        </div>

        <button
          onClick={nextTab}
          disabled={activeTab === totalTabs}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
          ${
            activeTab === totalTabs
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
      <div className=" flex gap-4">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-xl"
              >
                <div
                  className={`w-4 h-4 rounded-full ${selectedTheme.color}`}
                />
                {selectedTheme.name} Theme
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 rounded-2xl p-2">
              <DropdownMenuLabel className="text-base">
                Choose Theme
              </DropdownMenuLabel>

              <div className="grid grid-cols-2 gap-2 mt-2">
                {themes.map((theme, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => {
                      setSelectedTheme(theme);
                      setAccentColor(theme.value);
                    }}
                    className="flex items-center justify-between rounded-xl cursor-pointer p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${theme.color}`} />

                      <span>{theme.name}</span>
                    </div>

                    {selectedTheme.name === theme.name && <Check size={16} />}
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
         <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-xl"
    >
      {selectedTemplate.name} Template
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="w-52 rounded-2xl p-2">
    <DropdownMenuLabel className="text-base">
      Choose Template
    </DropdownMenuLabel>

    <div className="space-y-1 mt-2">
      {templates.map((template, index) => (
        <DropdownMenuItem
          key={index}
          onClick={() => {setSelectedTemplate(template); setTemplates(template.value)}}
          className="flex justify-between items-center rounded-xl p-3 cursor-pointer"
        >
          <span>{template.name}</span>

          {selectedTemplate.value === template.value && (
            <Check size={16} />
          )}
        </DropdownMenuItem>
      ))}
    </div>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
      </div>

      {activeTab === 1 && (
        <Personal_info data={data} setData={setData} nextTab={nextTab} />
      )}

      {activeTab === 2 && (
        <Professional_summary data={data} setData={setData} nextTab={nextTab} />
      )}

      {activeTab === 3 && (
        <Experience data={data} setData={setData} nextTab={nextTab} />
      )}

      {activeTab === 4 && (
        <Education data={data} setData={setData} nextTab={nextTab} />
      )}

      {activeTab === 5 && (
        <Project data={data} setData={setData} nextTab={nextTab} />
      )}

      {activeTab === 6 && <Skills data={data} setData={setData} />}
    </div>
  );
};

export default ResumeBuilderFrom;
