import { FC } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { space } from "postcss/lib/list";

interface RatingProps {
  rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
  // Létrehozunk egy tömböt 5 elemmel
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5; // fél csillag 
    return (
      <span key={index}>        
        {rating >= index + 1 ? (// ha az aktuális index > = 1-el akkor teljes csillag 
          <FaStar />
        ) : rating >= number ? (// ha az aktuális index > = 0.5-el akkor teljes csillag 
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />// üres csillagot teszünk
        )}
      </span>
    );
  });
  return <div className="flex text-yellow-400 ">{ratingStars}</div>;
};

export default Rating;
