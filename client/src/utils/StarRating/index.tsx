interface StarRatingProps {
    rating: number
} 

const StarRatingComponent: React.FC<StarRatingProps> = ({rating}) => {

    const stars = 5
    const starsGrade = 10

    return (
      <div className="star-rating">
        {[...Array(stars)].map((star, index) => {
          return (
            
              <span className={parseInt(((rating * stars) / starsGrade).toFixed(2)) >= index ? 'star' : ''}>&#9733;</span>
          );
        })}
      </div>
    );
  };

  export default StarRatingComponent