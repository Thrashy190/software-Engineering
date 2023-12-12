import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { db } from "../../firebase/firebase";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";

export default function Exam() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const getQuestions = async () => {
      const questionsRef = doc(db, "exams", id);
      const docSnap = await getDoc(questionsRef);
      if (docSnap.exists()) {
        setQuestions(docSnap.data().exam);
      } else {
        console.log("No such document!");
      }
    };
    getQuestions();
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-14">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Examen
          </Typography>
        </div>
        {questions.length > 0 && (
          <div className="app">
            {showScore ? (
              <>
                <div className="score-section text-white pb-10 text-5xl">
                  You scored {score} out of {questions.length}
                </div>
                <Button
                  variant="contained"
                  onClick={() => navigate("/mycourses")}
                >
                  Salir del examen
                </Button>
              </>
            ) : (
              <Card
                sx={{
                  backgroundColor: "#67237E",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "2rem",
                }}
              >
                <CardContent>
                  <div className="text-white text-5xl">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="text-white py-4 text-3xl">
                    {questions[currentQuestion].questionText}
                  </div>
                </CardContent>
                <CardActions>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <Button
                        size="large"
                        className="my-2"
                        variant="contained"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </Button>
                    )
                  )}
                </CardActions>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
