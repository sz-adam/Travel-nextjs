"use client";
import { TravelItem } from "@/type/types";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Definiáljuk a kategória típusát
interface CategoryContextType {
  categories: TravelItem[];
  setCategories: Dispatch<SetStateAction<TravelItem[]>>;
}

interface CategoryProviderProps {
  children: ReactNode;
}

const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  setCategories: () => {},
});

const CategoryContextProvider = ({ children }: CategoryProviderProps) => {
  const [categories, setCategories] = useState<TravelItem[]>([])

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export {CategoryContext, CategoryContextProvider}