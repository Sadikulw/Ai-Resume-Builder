import { dummyResumeData } from "@/components/dummyResumeData/dummyData";
import ResumeBuilderFrom from "@/components/ResumeBuilder/ResumeBuilderFrom";
import ResumeBuilderPreview from "@/components/ResumeBuilder/ResumeBuilderPreview";
import React, { useEffect, useState, useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Download, FileText, Image, Share2 } from "lucide-react";
import { useReactToPrint } from "react-to-print";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ResumeBuilder = ({ title = "Resume Builder" }) => {
  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Resume",
  });

  const handleSheare = () => {
    navigator.share({ url: window.location.href, text: "Resume" });
  };

  const [data, setData] = useState(dummyResumeData);
  const [accentColor, setAccentColor] = useState("#2563eb");
  const [templates, setTemplates] = useState("classic");
  const [dowloadeOpen, setDowloadeOpen] = useState(false);
  useEffect(() => {
    document.title = title;
  }, [title]);
  const PrintData = () => {
    console.log(templates);
  };
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
            onClick={PrintData}
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
                    {templates.toUpperCase()} Template
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="rounded-xl flex items-center gap-2">
                          <Download size={18} />
                          Download
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-52 rounded-2xl p-2">
                        <DropdownMenuItem
                          // onClick={handlePrint}
                          onClick={() => setDowloadeOpen(true)}
                          className="cursor-pointer rounded-lg"
                        >
                          <FileText className="mr-2" size={16} />
                          Download PDF
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          onClick={handlePrint}
                          className="cursor-pointer rounded-lg"
                        >
                          <FileText className="mr-2" size={16} />
                          Print
                        </DropdownMenuItem>

                        <DropdownMenuItem
                          className="cursor-pointer rounded-lg "
                          onClick={handleSheare}
                        >
                          <Share2 className="mr-2" size={16} />
                          Share Resume
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                {/* Download  Feature*/}
                <Dialog open={dowloadeOpen} onOpenChange={setDowloadeOpen}>
                  <DialogContent className="text-center">
                    <div className="flex flex-col items-center gap-3 py-6">
                      <div className="text-5xl">🚧</div>

                      <DialogTitle className="text-xl font-semibold">
                        Coming Soon
                      </DialogTitle>

                      <DialogDescription className="text-gray-500">
                        PDF Download & Export feature will be available soon.
                      </DialogDescription>

                      <Button
                        className="mt-4"
                        onClick={() => setDowloadeOpen(false)}
                      >
                        OK
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Preview */}
                <div
                  className="p-6 overflow-auto max-h-[85vh] bg-gray-50"
                  id="resume-preview"
                >
                  <ResumeBuilderPreview
                    data={data}
                    resumeRef={resumeRef}
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
