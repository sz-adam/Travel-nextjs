import Card from "@/components/Card";
import ImageBg from "@/components/ImageBg";
import TravelData from "../../travel.json";
import { TravelItem } from "@/type/types";
import FilterToggle from "@/components/filter/FilterToggle";

function Travel() {
  return (
    <div>
      <ImageBg />
      <FilterToggle />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {TravelData.map((item: TravelItem) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Travel;
