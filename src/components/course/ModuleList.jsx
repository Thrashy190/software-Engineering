import React, { useState } from "react";

import { useNavigate } from "react-router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";

const ModuleList = ({ modules, id }) => {
  const navigate = useNavigate();

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
              ? "bg-transparent border-[#FAD264] border-2"
              : "bg-[#FAD264]"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              expandedModule === index ? "pb-3" : ""
            }`}
          >
            <div
              className={`text-xl font-bold ${
                expandedModule === index ? "text-[#FAD264] " : "text-black "
              }`}
            >
              {module.name}
            </div>
            <div className="flex flex-row gap-4">
              <div
                className={`transition-transform transform ${
                  expandedModule === index ? "rotate-180" : ""
                }`}
                style={{
                  color: expandedModule === index ? "#FAD264" : "#000000",
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
                <div key={lessonIndex} className="flex justify-between mb-2 ">
                  <div className="flex flex-row gap-4">
                    <div
                      className="text-white text-xl font-bold "
                      onClick={() =>
                        navigate(`/lection/${id}/${index}/${lessonIndex}`)
                      }
                    >
                      {lesson.title}
                    </div>
                    {lesson.name === "video" ? (
                      <OndemandVideoIcon fontSize="large" color="primary" />
                    ) : lesson.name === "documento" ? (
                      <ArticleIcon fontSize="large" color="primary" />
                    ) : (
                      <QuizIcon fontSize="large" color="primary" />
                    )}
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

export default ModuleList;
