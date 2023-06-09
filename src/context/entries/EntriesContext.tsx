import { createContext } from "react";
import { Entry } from "@/interface";

interface ConstextProps {
  entries: Entry[];

  //Methods
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
}

export const EntriesContext = createContext({} as ConstextProps);
