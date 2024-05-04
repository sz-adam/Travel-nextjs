"use client";
import React, { useState } from "react";

import { IoFilterOutline } from "react-icons/io5";
import Filter from "./Filter";


const FilterToggle = () => {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterToggle = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div>
      <IoFilterOutline onClick={handleFilterToggle} className="text-2xl m-2 z-10"/>
      {showFilter && (
        <>
          <div className="fixed top-0 left-0 w-full h-full z-40"></div>
          <Filter setShowFilter={setShowFilter} showFilter={showFilter}/>
        </>
      )}
    </div>
  );
};

export default FilterToggle;
