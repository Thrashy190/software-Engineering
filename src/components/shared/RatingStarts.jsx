import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating, totalReviews }) => {
  const MAX_STARS = 5;
  const filledStars = Math.round(rating / 2);

  const renderStars = () => {
    return Array.from({ length: MAX_STARS }, (_, index) => (
      <span key={index}>
        {index < filledStars ? <StarIcon /> : <StarBorderIcon />}
      </span>
    ));
  };

  return (
    <div>
      <div>
        <span>Calificación: {rating}</span>
      </div>
      <div>{renderStars()}</div>
      <div>
        <span>Total de reseñas: {totalReviews}</span>
      </div>
    </div>
  );
};

export default RatingStars;
