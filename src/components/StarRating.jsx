const StarRating = ({ book, handleRatingParent }) => {
  const ratings = [];
  const handleRating = (star) => {
    handleRatingParent(star);
  };
  for (let i = 0; i < 5; i++) {
    ratings.push(
      <span
        className={`fa fa-star ${
          book.rating >= i + 1 ? 'fa-star--checked' : ''
        }`}
        onClick={() => handleRating(i + 1)}
      />
    );
  }
  return { ratings };
};

export default StarRating;
