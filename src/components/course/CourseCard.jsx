import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import RatingStars from "../shared/RatingStarts";
import { formatCurrencyToMXN } from "../../utils/formatter";

const CourseCard = (courseData) => {
  const {
    courseName,
    courseCreator,
    coursePrice,
    courseReviews,
    courseRating,
  } = courseData;

  return (
    <Card sx={{ maxWidth: 345, color: "#764288" }}>
      {/* <CardMedia component="img" alt="green iguana" height="140" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {courseName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {courseCreator}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <RatingStars rating={courseRating} totalReviews={courseReviews} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatCurrencyToMXN(coursePrice)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
