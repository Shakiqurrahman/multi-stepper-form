"use client";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    } else {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <button
      title={darkMode ? "Change To Light Mode" : "Change To Dark Mode"}
      onClick={() => setDarkMode(!darkMode)}
      className="size-10 flex justify-center items-center bg-blue-400 text-white rounded-md "
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default DarkModeBtn;
