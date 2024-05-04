"use client";

import React, { useState } from "react";
import Sights from "@/components/Sights";
import Reviews from "@/components/Reviews";
import Description from "@/components/Description";
import { TravelItem } from "@/type/types";

interface Props {
  newItem: TravelItem | undefined;
}

const DetailsNavigation = ({ newItem }: Props) => {
  const [currentTab, setCurrentTab] = useState("Description");
  return (
    <>
      <nav className="flex justify-between items-center p-2 text-white ">
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
        {currentTab === "Description" && <Description newItem={newItem} />}
        {currentTab === "Sights" && <Sights newItem={newItem} />}
        {currentTab === "Reviews" && <Reviews newItem={newItem} />}
      </div>
    </>
  );
};

export default DetailsNavigation;
