interface StarRatingProps {
    rating: number;
}
  
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const maxRating = 5;
    const roundedRating = Math.round(rating * 10) / 10;
    const filledStars = Math.min(maxRating, Math.ceil(roundedRating));
    const emptyStars = maxRating - filledStars;
  
    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, i) => (
          <label key={i} htmlFor={`star${i}`} className="text-4xl mr-2 text-yellow-500">&#9733;</label>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <label key={i + filledStars} htmlFor={`star${i + filledStars}`} className="text-4xl mr-2">&#9734;</label>
        ))}
      </div>
    );
};
  
export default StarRating;
  