import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    title: String,
    userId: String,
    professional_summary: String,
    personal_info: {
      full_name: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      website: String,
    },
    education: [
      {
        institution: String,
        degree: String,
        graduation_date: Date,
        gpa: String,
        field: String,
      },
    ],
    experience: [
      {
        company: String,
        position: String,
        start_date: Date,
        end_date: Date,
        description: String,
        is_current: Boolean,
      },
    ],
    projects: [
      {
        name: String,
        description: String,
      },
    ],
    skills: [String],
    templates: String,
    accentColor : String,
  },
  { timestamps: true },
);

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
const Schema = mongoose.Schema;
