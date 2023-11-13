"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { FaAdn } from "react-icons/fa";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);
  return (
    <>
      <div className="flex gap-4 items-center">
        <button
          className="  text-color-black dark:text-color-white px-0 md:px-4 py-2 rounded transition-all  "
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsFillMoonFill /> : <BsSun />}
        </button>
        <Link href="/">
          <FaAdn className="text-[white]" />
        </Link>
      </div>
    </>
  );
};

export default DarkMode;
