import React, { useContext } from "react";
import { SideSheet } from "evergreen-ui";
import { ThemeContext } from "styled-components";
import { SidebarContext } from "../../context/SidebarContext";

import { SidebarContainer, SidebarTitle, SearchInput } from "./Sidebar.styles";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const { colors } = useContext(ThemeContext);

  return (
    <SideSheet
      isShown={showSidebar}
      onCloseComplete={() => setShowSidebar(false)}
      containerProps={{ backgroundColor: colors.body }}
      preventBodyScrolling={false}
    >
      <SidebarContainer>
        <SidebarTitle>Search GitHub repositories</SidebarTitle>
        <SearchInput type="text" placeholder="e.g: react auth libraries" />
      </SidebarContainer>
    </SideSheet>
  );
};

export default Sidebar;
