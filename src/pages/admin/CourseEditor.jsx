import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SaveCourse from "./SaveCourse.jsx";
import {getCollection, getDocument} from "../../firebase/firestore.js";

const CourseEditor = () => {
  const {courseId} = useParams();
  const [course, setCourse] = useState(undefined);

  const fetchData = async () => {
    try {
      const course = await getDocument("courses", courseId);
      course.modules = await getCollection(`courses/${courseId}/modules`);
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
      {
        course && (
          <SaveCourse
            courseId={courseId}
            courseParams={course}
            existingModules={course.modules}
          />
        )
      }
    </>
  );
}


export default CourseEditor;
