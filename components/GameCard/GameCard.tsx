import Image from "next/image";
import wordle from "@/public/Wordle.png";
import "./GameCard.css";
export default function GameCard() {
  return (
    <div className="Card-Game">
      <Image className="img" src={wordle} alt="wordle" />{" "}
      <p>
        I love creating fun and interactive projects with code. Recently, I
        built a{" "}
        <a
          className="game-name"
          href={"https://word-game-weld.vercel.app/"}
          target="_blank"
        >
          word game
        </a>{" "}
        where players guess a five-letter word, and after each attempt, they get
        feedback on how many letters are correct until they find the right word.{" "}
      </p>
    </div>
  );
}
