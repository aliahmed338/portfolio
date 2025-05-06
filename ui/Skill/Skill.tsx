"use client";
import { ReactNode } from "react";
import style from "./Skill.module.css";
import useSound from "use-sound";

interface SkillProps {
  children: ReactNode;
  href?: string;
}

export default function Skill({ children, href }: SkillProps) {
  const popSound = "/Sound/pop.mp3";
  const [popPlay] = useSound(popSound);

  const handleMouseEnter = () => {
    popPlay();
  };

  return (
    <a
      className={style.skill}
      href={href}
      target="_blank"
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  );
}
