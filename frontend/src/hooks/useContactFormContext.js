import { useContext } from "react";
import { ContactFormContext } from "../context/ContactFormContext";

export const useContactFormContext = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw Error("Something went wrong");
  }
  return context;
};
