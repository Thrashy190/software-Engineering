import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";

const ModuleProgressList = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-4">
      {modules.map((module, index) => (
        <div
          key={index}
          className={` rounded p-4 cursor-pointer relative ${
            expandedModule === index
              ? "bg-transparent border-[#764288] border-2"
              : "bg-[#764288]"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              expandedModule === index ? "pb-3" : ""
            }`}
          >
            <div
              className={`text-xl font-bold ${
                expandedModule === index ? "text-[#764288] " : "text-black "
              }`}
            >
              {module.title}
            </div>
            <div className="flex flex-row gap-4">
              <div
                className={`pt-1 text-xl font-bold ${
                  expandedModule === index ? "text-[#764288] " : "text-black "
                }`}
              >
                {module.duration}
              </div>
              <div
                className={`transition-transform transform ${
                  expandedModule === index ? "rotate-180" : ""
                }`}
                style={{
                  color: expandedModule === index ? "#67237E" : "#000000",
                }}
                onClick={() => toggleModule(index)}
              >
                <KeyboardArrowDownIcon fontSize="large" />
              </div>
            </div>
          </div>
          {expandedModule === index && (
            <div className="flex flex-col">
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex justify-between mb-2">
                  <div className="flex flex-row gap-4">
                    <div className="text-white text-xl font-bold ">
                      {lesson.title}
                    </div>
                    {lesson.type === "Video" ? (
                      <OndemandVideoIcon fontSize="large" color="primary" />
                    ) : lesson.type === "Texto" ? (
                      <ArticleIcon fontSize="large" color="primary" />
                    ) : (
                      <QuizIcon fontSize="large" color="primary" />
                    )}
                  </div>
                  <div className="text-white text-xl font-bold ">
                    {lesson.duration}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ModuleProgressList;
