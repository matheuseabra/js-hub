import React, { useState } from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import { GlobalStyles } from "./styles/global";
import { lightTheme } from "./styles/theme";
import { SidebarContext } from "./context/SidebarContext";

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [theme, toggleTheme] = useTheme("theme", lightTheme);

  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Header toggleTheme={toggleTheme} />
          <Sidebar />
          <Routes />
        </Router>
      </ThemeProvider>
    </SidebarContext.Provider>
  );
};

export default App;
