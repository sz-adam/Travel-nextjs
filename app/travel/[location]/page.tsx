"use client";
import React, { useState } from "react";
import Travel from "../../../travel.json";
import Sights from "@/components/Sights";
import Reviews from "@/components/Reviews";
import Description from "@/components/Description";

interface CardProps {
  params: {
    location: string;
  };
}

const TravelDetails = ({ params }: CardProps) => {
  const location = params.location;
  const newItem = Travel.find((item) => item.location === location);
  const [currentTab, setCurrentTab] = useState("Description");

  return (
    <div
      className="bg-cover h-screen w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${newItem?.image})` }}
    >
      <div className="h-5/6 w-5/6 md:h-2/3 md:w-2/3 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
        <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 text-white">
          <button
            className={` ${currentTab === "Description" ? "border-b" : ""}`}
            onClick={() => setCurrentTab("Description")}
          >
            Description
          </button>
          <button
            className={` ${currentTab === "Sights" ? "border-b" : ""}`}
            onClick={() => setCurrentTab("Sights")}
          >
            Sights
          </button>
          <button
            className={` ${currentTab === "Reviews" ? "border-b" : ""}`}
            onClick={() => setCurrentTab("Reviews")}
          >
            Reviews
          </button>
        </nav>
        <div className="p-4">
          {currentTab === "Description" && <Description />}
          {currentTab === "Sights" && <Sights />}
          {currentTab === "Reviews" && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
