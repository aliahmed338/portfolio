"use client";

import { Send, Code } from "react-feather";
import Welcome from "@/components/HelloCard/Welcome/Welcome";
import Button from "@/ui/Button/Button";
import "./HelloCard.css";
import useSound from "use-sound";

export default function HelloCard() {
  const flySound = "/Sound/fly.wav";
  const [fly] = useSound(flySound, { volume: 0.5 });

  const handleClick = (sectionId: string) => {
    fly();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="AboutMe-card">
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

      <div className="btn-layout">
        <Button onClick={() => handleClick("section2")}>
          My Work <Code size="1.1rem" />
        </Button>
        <Button onClick={() => handleClick("section-3")}>
          Contact Me <Send size="1.1rem" />
        </Button>
        <a
          className="Mycv"
          href="https://drive.google.com/file/d/1jjt_QEfS4YQEptmusuady9hc8HDMzpzL/view?usp=sharing"
          target="_blank"
        >
          See My Cv
        </a>
      </div>
    </div>
  );
}
