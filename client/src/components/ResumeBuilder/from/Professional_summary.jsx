import { Sparkles, Loader2 } from "lucide-react";
import React, { useState } from "react";
import SaveAndContinue from "../SaveAndContinue";
import api from "@/api/axios";
import { toast } from "react-hot-toast";

const Professional_summary = ({ data, setData, nextTab }) => {
  const [loading, setLoading] = useState(false);
  const [summaries, setSummaries] = useState([]);

  // Handle textarea change
  const handleChange = (value) => {
    setData({
      ...data,
      professional_summary: value,
    });
  };

  // Generate AI summaries
  const generateSummary = async () => {
    try {
      setLoading(true);

      const response = await api.post("/ai/summary", {
        text: data?.professional_summary,
      });

      setSummaries(response.data.summaries);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


const saveProfessionalSummary = async () => {
  console.log(data)
  try {

    const response = await api.put(
      `/resume/${data._id}/section`,
      {
        professional_summary: data.professional_summary,
      }
    );

    console.log(response.data);

    nextTab();

  } catch (error) {
    console.log(error);
  }

};

  return (
    <div>
      {/* Top Bar */}
      <div className="flex justify-between items-center mt-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>

          <p className="text-sm text-gray-600">
            Add summary for your resume here
          </p>
        </div>

        <button
          onClick={() =>
            toast.promise(generateSummary(), {
              loading: "Generating AI summary...",
              success: "AI summary ready!",
              error: "Something went wrong",
            })
          }
          disabled={loading}
          className="bg-pink-400 flex items-center gap-2 hover:bg-pink-600 cursor-pointer text-white px-6 py-3 rounded-xl shadow-sm transition-all duration-200 font-medium w-fit disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              AI Enhance
            </>
          )}
        </button>
      </div>

      {/* Textarea */}
      <div className="mt-5">
        <textarea
          placeholder="Write your professional summary..."
          rows={7}
          className="w-full border border-gray-300 rounded-xl p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          onChange={(e) => handleChange(e.target.value)}
          value={data?.professional_summary || ""}
        />

        <SaveAndContinue nextTab={nextTab} onSave={saveProfessionalSummary}/>
      </div>

      {summaries.length > 0 && (
        <div className="mt-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">✨</span>
            <h4 className="text-lg font-semibold text-gray-900">
              AI Suggestions
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {summaries.map((item) => (
              <div
                key={item.id}
                className="relative p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
              >
                {/* Text */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-between">
                  {/* Use this */}
                  <button
                    onClick={() => handleChange(item.summary)}
                    className="text-xs px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Use this
                  </button>

                  {/* Copy */}
                  <button
                    onClick={() => navigator.clipboard.writeText(item.summary)}
                    className="text-xs px-3 py-1 border rounded-lg hover:bg-gray-100"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Professional_summary;
