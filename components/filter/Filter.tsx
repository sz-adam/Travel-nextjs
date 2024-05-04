import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

interface Props {
  showFilter: boolean;
  setShowFilter: (show: boolean) => void;
}
const categories = ["Food", "Travel", "Fashion"];
const continents = [
  "Europe",
  "Asia",
  "Africa",
  "North America",
  "South America",
  "Australia",
];
const Filter = ({ showFilter, setShowFilter }: Props) => {
  return (
    <div className="z-50 bg-white w-2/3 md:w-1/4 h-screen absolute top-0 flex flex-col">
      <div className="flex justify-end m-2">
        <RiCloseLargeLine
          onClick={() => setShowFilter(!showFilter)}
          className="cursor-pointer"
        />
      </div>
      <div className="m-4">
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              name={category}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="m-4">
        <h2 className="text-xl font-bold mb-2">Continents</h2>
        {continents.map((continent, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={continent}
              name={continent}
              className="mr-2"
            />
            <label htmlFor={continent}>{continent}</label>
          </div>
        ))}
      </div>
      <button>Filter</button>
    </div>
  );
};

export default Filter;
