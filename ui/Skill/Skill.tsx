"use client";
import { ReactNode } from "react";
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
    <a href={href} target="_blank" onMouseEnter={handleMouseEnter}>
      {children}
    </a>
  );
}
