import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";
import RatingStars from "../shared/RatingStarts";
import { formatCurrencyToMXN } from "../../utils/formatter";
import { downloadImage } from "../../firebase/storage";
import { useLocation, useNavigate } from "react-router-dom";

const CourseCard = ({ courseData, backgroundColor, fontColor }) => {
  const {
    courseName,
    courseCreator,
    coursePrice,
    courseReviews,
    courseRating,
    courseThumbNail,
    courseProgress,
  } = courseData;

  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = await downloadImage(courseThumbNail);
        setImageUrl(url);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {imageUrl ? (
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: backgroundColor,
            color: fontColor,
            cursor: "pointer",
          }}
          onClick={() => navigate("/course")}
        >
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            alt="Miniatura"
            src={imageUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {courseName}
            </Typography>
            <Typography variant="body">by {courseCreator}</Typography>
            <Typography variant="body">
              <RatingStars rating={courseRating} totalReviews={courseReviews} />
            </Typography>
            {coursePrice && (
              <Typography variant="body">
                {formatCurrencyToMXN(coursePrice)} MXN
              </Typography>
            )}
            {courseProgress && (
              <Typography variant="body">
                Progreso: {courseProgress}%
              </Typography>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{ maxWidth: 345, backgroundColor: "#764288", color: "#ffffff" }}
        >
          <Skeleton
            sx={{ height: 200 }}
            animation="wave"
            variant="rectangular"
          />
          <CardContent>
            <Skeleton
              animation="wave"
              height={50}
              style={{ marginBottom: 6 }}
              width="80%"
            />
            <Skeleton animation="wave" height={25} width="50%" />
            <Skeleton animation="wave" height={25} width="60%" />
            <Skeleton animation="wave" height={25} width="50%" />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default CourseCard;
