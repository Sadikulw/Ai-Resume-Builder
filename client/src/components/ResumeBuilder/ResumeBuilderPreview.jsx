import React from "react";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";

const ResumeBuilderPreview = ({ data, accentColor, templates }) => {
  const renderTemplate = () => {
    switch (templates) {
      case "classic":
        return <ClassicTemplate data={data} accentColor={accentColor} />;
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return <div>{renderTemplate()}</div>;
};

export default ResumeBuilderPreview;
