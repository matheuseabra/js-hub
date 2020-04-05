import { useState, useEffect } from "react";

import { lightTheme, darkTheme } from "../styles/theme";

type Response<T> = [T, Function];

function useTheme<T>(key: string, initialState: T): Response<T> {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  const toggleTheme = () => {
    if (theme.title === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return [theme, toggleTheme];
}

export default useTheme;
