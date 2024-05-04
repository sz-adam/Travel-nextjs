import { TravelItem } from "@/type/types";
import React from "react";
import Rating from "./Rating";
import { MdLanguage } from "react-icons/md";

interface Props {
  newItem: TravelItem | undefined;
}

const Description = ({ newItem }: Props) => {
  console.log(newItem);
  return (
    <div className=" px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{newItem?.name}</h2>
        <div className="flex items-center text-gray-400">
          <p>{newItem?.country}</p>
          <span className="mx-2">/</span>
          <p>{newItem?.continent}</p>
        </div>
      </div>
      <div>
        <div>
          <p className="mb-2">{newItem?.description}</p>
          <p>{newItem?.additional_info}</p>
        </div>
        <ul className="list-disc space-y-2 mt-10">
          {" "}
          {/* List styling */}
          <li>{newItem?.currency}</li>
          <li>{newItem?.expense_level}</li>
          <li> {newItem?.time_zone}</li>
          <li>{newItem?.best_time_to_visit}</li>
        </ul>
      </div>
      <div className="flex items-center mt-4">
        {" "}
        {/* Languages section styling */}
        <MdLanguage className="mr-2 text-gray-400 text-xl" />
        <ul className="flex items-center space-x-2 ">
          {newItem?.languages.map((language, index) => (
            <li key={index} className="text-gray-400 font-medium text-lg">
              {language}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-8">
        {" "}
        {/* Rating section styling */}
        <Rating rating={newItem?.rating || 0} />
      </div>
    </div>
  );
};

export default Description;
