"use client";
import Image from "next/image";
import wordle from "@/public/Wordle.webp";
import style from "./GameCard.module.css";
import Games from "../Games/Games";
import { useState } from "react";
import { getRandomWord } from "./../functions";
import Results from "../Results/Results";

export default function GameCard() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [answer, setAnswer] = useState(() => getRandomWord());
  const [gameStatus, setGameStatus] = useState("running");

  function handleSubmitGuess(guess: string) {
    const nextGuesses: string[] = [...guesses, guess];
    const guessesLength = nextGuesses.length;
    setGuesses(nextGuesses);
    console.log(answer);
    if (guess === answer && guessesLength <= 5) {
      setGameStatus("won");
    } else if (guess !== answer && guessesLength === 5) {
      setGameStatus("lose");
    }
  }

  function restartGame() {
    setGuesses([]);
    setAnswer(() => getRandomWord());
    setGameStatus("running");
  }
  return (
    <article className={style.CardGame}>
      <div className={style.result}>
        <Results
          restartGame={restartGame}
          answer={answer}
          gameStatus={gameStatus}
          guesses={guesses}
        />
      </div>

      <Image className={style.img} src={wordle} alt="wordle" priority />
      <Games
        guesses={guesses}
        answer={answer}
        setAnswer={setAnswer}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </article>
  );
}
