"use client";

import { Send, Code } from "react-feather";
import Welcome from "@/components/HelloCard/Welcome/Welcome";
import Button from "@/ui/Button/Button";
import style from "./HelloCard.module.css";
import useSound from "use-sound";

export default function HelloCard() {
  const flySound = "/Sound/fly.wav";
  const [fly] = useSound(flySound, { volume: 0.5 });

  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    fly();
  };

  return (
    <article className={style.AboutMecard}>
      <Welcome />
      <p>
        I started web development with React and front-end technologies and have
        been building ever since.
      </p>
      <p>
        I have worked on multiple projects, including e-commerce platforms, and
        note-taking applications. My experience includes using React,
        TypeScript, and UI/UX design principles to create user-friendly
        interfaces.
      </p>
      <p>
        Currently, I’m focused on expanding my skills, working on innovative
        projects.
      </p>

      <div className={style.btnlayout}>
        <Button onClick={() => handleClick("section2")}>
          My Work <Code size="1.1rem" />
        </Button>
        <Button onClick={() => handleClick("contactme")}>
          Contact Me <Send size="1.1rem" />
        </Button>
        <a
          className="Mycv"
          href="https://drive.google.com/file/d/1f-DOL-eO8e2hgB-mIJ4GVtNK0HgE_ZeH/view?usp=sharing"
          target="_blank"
        >
          See My Cv
        </a>
      </div>
    </article>
  );
}
