"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";
import useSound from "use-sound";
import "./NavBar.css";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  const flySound = "/Sound/sound.wav";
  const [play] = useSound(flySound, { volume: 0.5 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") === "dark";
      setDarkMode(storedTheme);
    }
  }, []);

  function ModeEffect() {
    if (darkMode === null) return;

    setDarkMode(!darkMode);
    play();
  }

  useEffect(() => {
    if (darkMode === null) return; // تأكد من عدم التحديث بدون قيمة

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <h1 className="Logo">A.Developer</h1>
      <div className="icons">
        {darkMode !== null &&
          (darkMode ? (
            <Sun className="icon" size="1.5rem" onClick={ModeEffect} />
          ) : (
            <Moon className="icon" size="1.5rem" onClick={ModeEffect} />
          ))}
      </div>
    </div>
  );
}
