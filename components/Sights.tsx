import { TravelItem } from "@/type/types";
import React from "react";

interface Props {
  newItem: TravelItem | undefined;
}

const Sights = ({ newItem }: Props) => {
  return (
    <>
      {newItem?.sights?.map((sights, index) => (
        <div key={index} className="flex items-center justify-center">
          <p className="list-disc my-5">{sights}</p>
        </div>
      ))}
    </>
  );
};

export default Sights;
