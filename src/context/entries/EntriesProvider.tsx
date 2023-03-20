import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { Entry } from "@/interface";
import { EntriesContext, entriesReducer } from "./";
import { NewEntry } from "../../components/ui/NewEntry";

export interface EntriesState {
  entries: Entry[];
}

const UI_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Estudiar Typescrit",
      status: "pending",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En Progreso: Estudiar Next.js",
      status: "in-progress",
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Terminada: Estudiar PostgreSQL",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, UI_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Update-Entry", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
