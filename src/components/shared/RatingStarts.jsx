import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating, totalReviews, fontColor }) => {
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
    <div className="flex flex-row gap-2" style={{ color: fontColor }}>
      <div>{renderStars()}</div>
      <div>
        <span className="font-bold">{rating}</span>
      </div>
      <div>
        <span className="font-light">({totalReviews})</span>
      </div>
    </div>
  );
};

export default RatingStars;
