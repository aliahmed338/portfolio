"use client";
import { ReactNode, useCallback, useEffect, useState } from "react";
import "./Skill.css";
import useSound from "use-sound";

interface SkillProps {
  children: ReactNode;
  href?: string;
}

export default function Skill({ children, href }: SkillProps) {
  const popSound = "/Sound/pop.mp3";
  const [isAllowed, setIsAllowed] = useState(false);
  const [popPlay] = useSound(popSound);

  useEffect(() => {
    const enableAudio = () => {
      setIsAllowed(true);
      window.removeEventListener("mousemove", enableAudio);
      window.removeEventListener("keydown", enableAudio);
      window.removeEventListener("click", enableAudio);
    };

    // انتظار أول تفاعل للمستخدم
    window.addEventListener("mousemove", enableAudio);
    window.addEventListener("keydown", enableAudio);
    window.addEventListener("click", enableAudio);

    return () => {
      window.removeEventListener("mousemove", enableAudio);
      window.removeEventListener("keydown", enableAudio);
      window.removeEventListener("click", enableAudio);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isAllowed) {
      popPlay();
    }
  }, [isAllowed, popPlay]);

  return (
    <a
      className="skill"
      href={href}
      target="_blank"
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </a>
  );
}
