import Card from "@/components/Card";
import ImageBg from "@/components/ImageBg";
import TravelData from "../../../travel.json";
import { TravelItem } from "@/type/types";

function Travel() {
  return (
    <div>
      <ImageBg />
      <div>
        {TravelData.map((item: TravelItem) => (
          <Card key={item.id} data={item} /> 
        ))}
      </div>
    </div>
  );
}

export default Travel;
