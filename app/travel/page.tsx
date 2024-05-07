"use client";
import Card from "@/components/Card";
import { Suspense, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ImageBg from "@/components/ImageBg";
import TravelData from "../../travel.json";
import { TravelItem } from "@/type/types";
import FilterToggle from "@/components/filter/FilterToggle";
import { useContext } from "react";
import { CategoryContext } from "@/context/CategoryContext";

function Travel() {
  const { categories } = useContext(CategoryContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ImageBg />
      <FilterToggle />
      <Suspense fallback={<Loading />}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {categories.length === 0
                ? TravelData.map((item: TravelItem) => (
                    <Card key={item.id} data={item} />
                  ))
                : categories.map((item: TravelItem) => (
                    <Card key={item.id} data={item} />
                  ))}
            </>
          )}
        </div>
      </Suspense>
    </div>
  );
}

export default Travel;
