import React from "react";
import useTheme from "../context/theme";

const ThemBtn = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const handleThemeChange = (e) => {
    const themeModeStatus = e.currentTarget.checked;
    if (themeModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <label
      className="cursor-pointer relative inline-flex items-center mb-0"
      aria-label={`theme-toggle`}
    >
      <input
        value=""
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={handleThemeChange}
      />
      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-black peer-checked:bg-blue-600"></div>
    </label>
  );
};

export default ThemBtn;
