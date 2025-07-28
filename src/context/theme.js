import { createContext, useContext } from "react";

// different approach
export const ThemeContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext;

export default function useTheme() {
  return useContext(ThemeContext);
}
