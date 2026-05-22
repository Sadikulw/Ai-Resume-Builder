import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { CiLinkedin } from "react-icons/ci";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";

    const [year, month] = dateStr.split("-");

    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const imageFilter = data.personal_info?.removeBackground
    ? "grayscale(0.8)"
    : "none";

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        {/* Left Top Image */}
        <div className="col-span-1 py-10">
          {data.personal_info?.image &&
          typeof data.personal_info.image === "string" ? (
            <div className="mb-6">
              <img
                src={data.personal_info.image}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
                style={{
                  background: accentColor + "70",
                  filter: imageFilter,
                }}
              />
            </div>
          ) : data.personal_info?.image &&
            typeof data.personal_info.image === "object" ? (
            <div className="mb-6">
              <img
                src={URL.createObjectURL(data.personal_info.image)}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto"
                style={{
                  filter: imageFilter,
                }}
              />
            </div>
          ) : null}
        </div>

        {/* Name + Profession */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1 className="text-4xl font-bold text-zinc-700 tracking-widest">
            {data.personal_info?.full_name || "Your Name"}
          </h1>

          <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
            {data.personal_info?.profession || "Profession"}
          </p>
        </div>

        {/* Sidebar */}
        {/* Sidebar */}
<aside className="col-span-1 border-r border-zinc-300 p-6 pt-0 overflow-hidden">
  {/* Contact */}
  <section className="mb-8">
    <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
      CONTACT
    </h2>

    <div className="space-y-3 text-sm">
      {data.personal_info?.phone && (
        <div className="flex items-start gap-3">
          <Phone
            size={14}
            style={{ color: accentColor }}
            className="mt-1 shrink-0"
          />

          <span className="break-all">
            {data.personal_info.phone}
          </span>
        </div>
      )}

      {data.personal_info?.email && (
        <div className="flex items-start gap-3">
          <Mail
            size={14}
            style={{ color: accentColor }}
            className="mt-1 shrink-0"
          />

          <span className="break-all">
            {data.personal_info.email}
          </span>
        </div>
      )}

      {data.personal_info?.location && (
        <div className="flex items-start gap-3">
          <MapPin
            size={14}
            style={{ color: accentColor }}
            className="mt-1 shrink-0"
          />

          <span className="break-words">
            {data.personal_info.location}
          </span>
        </div>
      )}

      {data.personal_info?.linkedin && (
        <div className="flex items-start gap-3">
          <CiLinkedin
            size={16}
            style={{ color: accentColor }}
            className="mt-1 shrink-0"
          />

          <span className="break-all text-xs">
            {data.personal_info.linkedin}
          </span>
        </div>
      )}

      {data.personal_info?.website && (
        <div className="flex items-start gap-3">
          <Globe
            size={14}
            style={{ color: accentColor }}
            className="mt-1 shrink-0"
          />

          <span className="break-all text-xs">
            {data.personal_info.website}
          </span>
        </div>
      )}
    </div>
  </section>

  {/* Education */}
  {data.education && data.education.length > 0 && (
    <section className="mb-8">
      <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
        EDUCATION
      </h2>

      <div className="space-y-4 text-sm">
        {data.education.map((edu, index) => (
          <div key={index}>
            <p className="font-semibold uppercase break-words">
              {edu.degree}
            </p>

            <p className="text-zinc-600 break-words">
              {edu.institution}
            </p>

            <p className="text-xs text-zinc-500">
              {formatDate(edu.graduation_date)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )}

  {/* Skills */}
  {data.skills && data.skills.length > 0 && (
    <section>
      <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
        SKILLS
      </h2>

      <ul className="space-y-1 text-sm">
        {data.skills.map((skill, index) => (
          <li key={index} className="break-words">
            • {skill}
          </li>
        ))}
      </ul>
    </section>
  )}
</aside>

        {/* Main Content */}
        <main className="col-span-2 p-8 pt-0">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-3"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>

              <p className="text-zinc-700 leading-relaxed">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h2
                className="text-sm font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>

              <div className="space-y-6">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-zinc-900">
                        {exp.position}
                      </h3>

                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)}
                        {" - "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>

                    <p className="text-sm mb-2" style={{ color: accentColor }}>
                      {exp.company}
                    </p>

                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section>
              <h2
                className="text-sm uppercase tracking-widest font-semibold mb-4"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>

              <div className="space-y-5">
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-md font-semibold text-zinc-800">
                      {project.name}
                    </h3>

                    {project.type && (
                      <p
                        className="text-sm mb-2"
                        style={{ color: accentColor }}
                      >
                        {project.type}
                      </p>
                    )}

                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;
