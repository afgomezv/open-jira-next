import { createContext } from "react";

interface ConstextProps {
  sidemenuOpen: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ConstextProps);
