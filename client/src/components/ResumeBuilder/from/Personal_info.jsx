import React from "react";
import {
  BriefcaseBusiness,
  Globe,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import SaveAndContinue from "../SaveAndContinue";
import api from "@/api/axios";

const Personal_info = ({ data, setData, nextTab}) => {

  const fields = [
    {
      key: "full_name",
      label: "Full Name",
      icon: User,
      type: "text",
      required: true,
    },
    {
      key: "email",
      label: "Email Address",
      icon: Mail,
      type: "email",
      required: true,
    },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    
    {
      key: "linkedin",
      label: "Linkedin Profile",
      icon: CiLinkedin,
      type: "url",
    },
    { key: "website", label: "Personal Website", icon: Globe, type: "url" },
  ];

  const handleChange = (key, value) => {
    setData({
      ...data,
      personal_info: {
        ...data.personal_info,
        [key]: value,
      },
    });
  };

const savePersonalInfo = async () => {
  console.log(data)
  try {

    const response = await api.put(
      `/resume/${data._id}/section`,
      {
        personal_info: data.personal_info,
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
      <h3 className=" text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className=" text-sm text-gray-600 ">
        Get Started with the personal information
      </p>
      <div>
        {" "}
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.key} className=" space-y-1 mt-5">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Icon className=" size-4" />
                {field.label}
                {field.required && <span className=" text-red-600">*</span>}
              </label>
              <input
                type={field.type}
                value={data?.personal_info?.[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className=" mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
                placeholder={`Enter your ${field.label || `enter your ${field.key}`} here`.toLowerCase()}
                required={field.required}
              />
            </div>
          );
        })}
        <SaveAndContinue  onSave={savePersonalInfo}/>
      </div>
    </div>
  );
};

export default Personal_info;
