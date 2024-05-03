import { TravelItem } from "@/type/types";
import React from "react";
import Rating from "./Rating";
interface Props {
  newItem: TravelItem | undefined;
}
const Reviews = ({ newItem }: Props) => {
  return (
    <section className=" px-4 py-12 md:py-24 w-full z-50 ">
      {newItem?.reviews.map((reviews) => (
        <div key={reviews.id} className="max-w-screen-xl mx-auto m-2 ">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative ">
            <div className="bg-blue-200 rounded-lg p-8 text-center ">
              <p className="font-bold uppercase">{reviews.name}</p>
              <p className="text-xl font-light italic text-gray-700">
                {reviews.description}
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <Rating rating={reviews.rating} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
