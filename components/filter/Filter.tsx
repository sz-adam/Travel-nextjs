import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Category from "./Category";

interface Props {
  showFilter: boolean;
  setShowFilter: (show: boolean) => void;
}

const Filter = ({ showFilter, setShowFilter }: Props) => {
  return (
    <div className="z-50 bg-white w-2/3 md:w-1/4 h-screen absolute top-0 flex flex-col">
      <div className="flex justify-end m-2">
        <RiCloseLargeLine
          onClick={() => setShowFilter(!showFilter)}
          className="cursor-pointer"
        />
      </div>
      <Category />
    
    </div>
  );
};

export default Filter;
