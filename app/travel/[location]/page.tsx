import React from 'react';

interface CardProps {
  params: {   
    location:string 
  };
}

const TravelDetails= ({ params }:CardProps) => {
  const location  = params.location; 
console.log(location); 
  return (
    <div>
      <p>{location}</p>
    </div>
  );
};

export default TravelDetails;
