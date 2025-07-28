import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Card from "./comonents/Card";
import ThemBtn from "./comonents/ThemBtn";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // actual theme change using js
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <UserContextProvider>
        <div className="flex flex-wrap min-h-screen items-center p-4 bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-gray-950 dark:[--pattern-fg:var(--color-white)]/10">
          <div className="w-full">
            <div className="w-full max-w-5xl mx-auto flex justify-end mb-4">
              {/* themeBtn */}
              <ThemBtn />
            </div>
            <div className="w-full max-w-5xl mx-auto">
              {/* Card */}
              <Card />
            </div>
          </div>
        </div>
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default App;
