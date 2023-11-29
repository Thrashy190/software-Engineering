import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../context/AuthContext";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Review = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    comment: "",
    rate: 0,
    userName: currentUser.email,
  });

  const sendReview = async () => {
    const courseRef = doc(db, "courses", id);
    await updateDoc(courseRef, {
      reviews: arrayUnion(review),
    });
    navigate(`/courses`);
  };

  const handleCommentInput = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="text-lg pt-4">
        <Typography color="primary" variant="h4">
          {`Reseña de Curso`}
        </Typography>
      </div>
      <div className="pt-6">
        <Typography color="primary" variant="h6">
          Calificación
        </Typography>
        <Rating
          name="simple-controlled"
          value={review.rate}
          onChange={(event, newValue) => {
            setReview({ ...review, rate: newValue });
          }}
          sx={{
            "& .css-dqr9h-MuiRating-label": {
              color: (theme) => theme.palette.primary.main,
            },
            ".MuiRating-iconEmpty": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        />
      </div>
      <div className="pt-4">
        <TextField
          fullWidth
          label="Comentario"
          value={review.comment}
          name="comment"
          variant="outlined"
          onChange={handleCommentInput}
          multiline
          rows={10}
          sx={{
            "& label": {
              color: (theme) => theme.palette.primary.main,
            },
            input: {
              color: (theme) => theme.palette.primary.main,
            },
            textarea: {
              color: (theme) => theme.palette.primary.main,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: (theme) => theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
      </div>
      <div className="flex justify-end pt-4">
        <Button variant="contained" onClick={sendReview}>
          Enviar
        </Button>
      </div>
    </>
  );
};

export default Review;
