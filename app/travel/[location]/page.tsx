import DetailsNavigation from "@/components/DetailsNavigation";
import Travel from "../../../travel.json";

interface CardProps {
  params: {
    location: string;
  };
}

const TravelDetails = ({ params }: CardProps) => {
  const location = params.location;
  const newItem = Travel.find((item) => item.location === location);
  console.log(newItem);

  return (
    <div
      className="bg-cover h-screen w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${newItem?.image})` }}
    >
      <div className="h-5/6 w-5/6 md:h-2/3 md:w-2/3 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 overflow-scroll">
       <DetailsNavigation newItem={newItem}/>
      </div>
    </div>
  );
};

export default TravelDetails;
