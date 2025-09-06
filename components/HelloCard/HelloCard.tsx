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
        I’m a web developer specializing in React, TypeScript, and Next.js, with
        hands-on experience in building e-commerce platforms, note-taking apps,
        and blogs.
      </p>
      <p>
        I’m also learning backend technologies like Node.js, Express, and
        MongoDB, and currently creating MERN stack e-commerce applications to
        develop full-stack solutions.
      </p>
      <p>
        Currently, I’m focused on expanding my skill set and working on
        innovative, user-centered projects.
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
