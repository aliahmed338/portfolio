"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";
import style from "./NavBar.module.scss";
import useSound from "use-sound";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const Sound = "/Sound/sound.wav";
  const [fly] = useSound(Sound, { volume: 1 });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function ModeEffect() {
    if (darkMode === null) return;

    const newMode = !darkMode;
    setDarkMode(newMode);

    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    fly();
  }

  return (
    <nav className={style.container}>
      <p className={style.Logo}>A.Developer</p>
      <ul className={style.icons}>
        <li>
          {darkMode ? (
            <Sun className="icon" size="1.5rem" onClick={ModeEffect} />
          ) : (
            <Moon className="icon" size="1.5rem" onClick={ModeEffect} />
          )}
        </li>
      </ul>
    </nav>
  );
}
