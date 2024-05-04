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

  return (
    <div className="w-full bg-slate-600 flex max-lg:flex-col ">
    <div className="h-screen w-full lg:w-8/12 bg-cover">
      <img
        src={newItem?.image}
        alt={newItem?.name}
        className="bg-cover bg-no-repeat bg-center h-full"
      />
    </div>
    <div className="w-full lg:w-4/12 overflow-auto">
      <DetailsNavigation newItem={newItem} />
    </div>
  </div>
  );
};

export default TravelDetails;