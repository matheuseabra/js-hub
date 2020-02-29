import { createContext } from "react";

type SidebarProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarProps>({
  showSidebar: false,
  setShowSidebar: () => {}
});
