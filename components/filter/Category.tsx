"use client";

import React, { useContext, useState } from "react";
import travel from "../../travel.json";
import { TravelItem } from "@/type/types";
import { CategoryContext } from "@/context/CategoryContext";

const Category = () => {
  const { setCategories } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categorys = [
    "All",
    ...Array.from(new Set(travel.map((item: TravelItem) => item.category))),
  ];
  const categorysContinent = [
    ...Array.from(new Set(travel.map((item: TravelItem) => item.continent))),
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setCategories([]);
    } else {
      const categoryContent = travel.filter(
        (item: TravelItem) => item.category === category
      );
      setCategories(categoryContent);
    }
  };
  const handleContinentCategoryClick = (continent: string) => {
    setSelectedCategory(continent);
    if (continent === "All") {
      setCategories([]);
    } else {
      const categoryContent = travel.filter(
        (item: TravelItem) => item.continent === continent
      );
      setCategories(categoryContent);
    }
  };

  return (
    <>
      <div className="m-4">
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        {categorys.map((category, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={category}
              name={category}
              className="mr-2"
              checked={selectedCategory === category}
              onChange={() => handleCategoryClick(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div className="m-4">
        <h2 className="text-xl font-bold mb-2">Continents</h2>
        {categorysContinent.map((continent, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={continent}
              name={continent}
              className="mr-2"
              checked={selectedCategory === continent}
              onChange={() => handleContinentCategoryClick(continent)}
            />
            <label htmlFor={continent}>{continent}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
