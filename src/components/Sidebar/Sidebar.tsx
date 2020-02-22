import React from "react";
import { SideSheet, SearchInput, Pane } from "evergreen-ui";

const Sidebar = () => {
  return (
    <SideSheet>
      <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
        <Pane padding={16}>
          <h2>Search</h2>
          <SearchInput placeholder="Search for repositories" width="100%" />
        </Pane>
      </Pane>
    </SideSheet>
  );
};

export default Sidebar;
