import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const RatingStars = ({ rating, totalReviews, fontColor }) => {
  const MAX_STARS = 5;

  let sumatoria = 0;

  const getrating = () => {
    console.log(rating);
    if (!rating) {
      return 0;
    }
    for (let i = 0; i < rating.length; i++) {
      sumatoria = sumatoria + rating[i].rate;
    }

    return sumatoria / rating.length;
  };

  const ratingData = getrating();

  const filledStars = Math.round(ratingData);

  const renderStars = () => {
    console.log(rating);
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
        <span className="font-light">({totalReviews})</span>
      </div>
    </div>
  );
};

export default RatingStars;
