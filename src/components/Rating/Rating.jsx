import "./Rating.css";

// eslint-disable-next-line react/prop-types
const Rating = ({rating ,reviews}) => {
  

  return (
    <div  className="rating-div">
      <div className="rating-div">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? "filled" : "empty"}`}
          >
            ★
          </span>
          
        ))}
      
      </div>
      <p>{` ${reviews} Review`}</p>
      </div>
  );
};

export default Rating;
