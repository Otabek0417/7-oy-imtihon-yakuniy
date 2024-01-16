import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext Global contextProvider tomonidan o'ralgan bo'lishi kerak !",
    );
  } 
  return context
}
