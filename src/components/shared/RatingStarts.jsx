import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ ratingArray, totalReviews, fontColor }) => {
  const rating = 0;
  const MAX_STARS = 5;
  const filledStars = Math.round(rating / 2);
  if (ratingArray) {
    rating =
      ratingArray.reduce((acc, curr) => acc + curr.rate, 0) /
      ratingArray.length;
  }

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
