
import { CategoryContextProvider } from "@/context/CategoryContext";
import Travel from "./travel/page";

export default function Home() {
  return (
    <CategoryContextProvider>
      <Travel />
      </CategoryContextProvider>
  );
}
