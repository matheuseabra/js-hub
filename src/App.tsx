import React, { useState } from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import { SideSheet, SearchInput, Pane } from "evergreen-ui";

import useTheme from "./hooks/useTheme";
import { DefaultTheme } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme } from "./styles/theme";

const App: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  const [theme, ThemeProvider, toggleTheme] = useTheme<DefaultTheme>(
    "theme",
    lightTheme
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header toggleTheme={toggleTheme} setShowSearch={setShowSearch} />
        <SideSheet
          isShown={showSearch}
          onCloseComplete={() => setShowSearch(false)}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <h2>Search</h2>
              <SearchInput placeholder="Search for repositories" width="100%" />
            </Pane>
          </Pane>
        </SideSheet>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
