import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SaveCourse from "./SaveCourse.jsx";
import { getCollection, getDocument } from "../../firebase/firestore.js";

const CourseEditor = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const course = await getDocument("courses", courseId);
      console.log(course);
      course.modules = await getCollection(`courses/${courseId}/modules`);

      // get lecciones
      course.modules.forEach(async (module) => {
        module.lessons = await getCollection(
          `courses/${courseId}/modules/${module.id}/lessons`
        );
      });

      setIsLoading(false);
      setCourse(course);
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <SaveCourse
          courseId={courseId}
          courseParams={course}
          existingModules={course.modules}
        />
      )}
    </>
  );
};

export default CourseEditor;
