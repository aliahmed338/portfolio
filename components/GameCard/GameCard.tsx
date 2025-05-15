import Image from "next/image";
import wordle from "@/public/Wordle.webp";
import style from "./GameCard.module.css";
export default function GameCard() {
  return (
    <article className={style.CardGame}>
      <Image className={style.img} src={wordle} alt="wordle" priority />
      <p>
        I love creating fun and interactive projects with code. Recently, I
        built a
        <span>
          <a
            className={style.gamename}
            href={"https://word-game-weld.vercel.app/"}
            target="_blank"
          >
            word game
          </a>
        </span>
        where players guess a five-letter word, and after each attempt, they get
        feedback on how many letters are correct until they find the right word.
      </p>
    </article>
  );
}
