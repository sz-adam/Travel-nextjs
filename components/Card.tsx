import React from "react";
import { TravelItem } from "@/type/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Rating from "./Rating";

interface Props {
  data: TravelItem;
}

const Card = ({ data }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="relative overflow-hidden bg-cover bg-no-repeat ">
          <div className="absolute top-3 left-3">
            <Rating rating={data.rating} />
          </div>
          <div >
            <Image
              width={200}
              height={300}
              className="rounded-t-lg w-full h-64 object-cover transition duration-300 ease-in-out hover:scale-110"
              src={data.image}
              alt={data.location}
            />
          </div>
        </div>
        <div className="p-5">
          <p >
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {data.name}
            </h5>
          </p>
          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {data.description}
          </p>
          <div className="mt-4 flex flex-wrap justify-end items-center text-center ">
            <Link
              href={`/travel/${data.location}`}
              className="text-white bg-blue-500 rounded-full px-4 py-2.5 flex items-center justify-center transition duration-300 hover:bg-blue-600"
            >
              Views <FaArrowRightLong className="ml-3 " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
