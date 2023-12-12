import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import Notification from "../shared/Notifications";

const QuestionsManager = ({ courseId, isNew }) => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    answerOptions: [
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
      { answerText: "", isCorrect: false },
    ],
  });

  useEffect(() => {
    if (isNew) {
      setQuestions([]);
    } else {
      //Crea una funcion de firebase para traer la coleecion de preguntas
      const getQuestions = async () => {
        const questionsRef = doc(db, "exams", courseId);
        const docSnap = await getDoc(questionsRef);
        if (docSnap.exists()) {
          setQuestions(docSnap.data().exam);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      };
      getQuestions();
    }
  }, []);

  const addQuestion = () => {
    // Verifica si la pregunta y al menos una opción están completas
    if (
      newQuestion.questionText.trim() === "" ||
      newQuestion.answerOptions.every(
        (option) => option.answerText.trim() === ""
      ) ||
      newQuestion.answerOptions.every((option) => !option.isCorrect)
    ) {
      // Muestra un mensaje de error o realiza alguna acción
      alert("Completa la pregunta y al menos una opción antes de agregar.");
      return;
    }

    setQuestions([...questions, newQuestion]);
    setNewQuestion({
      questionText: "",
      answerOptions: [
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
        { answerText: "", isCorrect: false },
      ],
    });
  };

  const UpdateExamInFirebase = async () => {
    const questionsRef = doc(db, "exams", courseId);
    const docSnap = await getDoc(questionsRef);
    if (docSnap.exists()) {
      await updateDoc(doc(db, "exams", courseId), { exam: questions });
      setNotify({
        isOpen: true,
        message: "Examen Actualizado con exito",
        type: "success",
      });
    } else {
      await setDoc(doc(db, "exams", courseId), { exam: questions });
      setNotify({
        isOpen: true,
        message: "Examen creado con exito",
        type: "success",
      });
    }
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="pb-3">
      <h3>Examen</h3>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.questionText}</h3>
          <ul>
            {question.answerOptions.map((option, optionIndex) => (
              <li key={optionIndex}>
                <FormControlLabel
                  control={<Checkbox checked={option.isCorrect} />}
                  label={option.answerText}
                />
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeQuestion(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <div>
        <h4 className="py-4 ">Agregar pregunta</h4>
        <div className="pb-4">
          <TextField
            label="Question"
            value={newQuestion.questionText}
            onChange={(e) =>
              setNewQuestion({ ...newQuestion, questionText: e.target.value })
            }
          />
        </div>
        <ul className="flex flex-row gap-3">
          {newQuestion.answerOptions.map((option, optionIndex) => (
            <li key={optionIndex}>
              <TextField
                label={`Option ${optionIndex + 1}`}
                value={option.answerText}
                onChange={(e) =>
                  setNewQuestion((prev) => {
                    const newOptions = [...prev.answerOptions];
                    newOptions[optionIndex].answerText = e.target.value;
                    return { ...prev, answerOptions: newOptions };
                  })
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={option.isCorrect}
                    onChange={(e) =>
                      setNewQuestion((prev) => {
                        const newOptions = [...prev.answerOptions];
                        newOptions[optionIndex].isCorrect = e.target.checked;
                        return { ...prev, answerOptions: newOptions };
                      })
                    }
                  />
                }
                label="Correct"
              />
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          color="primary"
          onClick={addQuestion}
          className="mb-4"
        >
          Agregar pregunta
        </Button>
      </div>
      <Button
        variant="contained"
        color="primary"
        disabled={questions.length === 0}
        onClick={UpdateExamInFirebase}
      >
        Actualizar
      </Button>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </div>
  );
};

export default QuestionsManager;
