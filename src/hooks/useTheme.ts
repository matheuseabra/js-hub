import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

function useTheme() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme.title === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return {
    theme,
    toggleTheme,
    ThemeProvider
  };
}

export default useTheme;
