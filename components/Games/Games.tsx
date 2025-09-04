"use client";
import "./Games.css";
import Guesses from "../Guesses/Guesses";
import GuessInput from "../GuessInput/GuessInput";

interface Props {
  guesses: string[];
  answer: string;
  setAnswer: (arg: string) => void;
  handleSubmitGuess: (arg: string) => void;
  gameStatus: string;
}
export default function Games({
  guesses,
  answer,
  handleSubmitGuess,
  gameStatus,
}: Props) {
  return (
    <>
      <div className="layout">
        <Guesses guesses={guesses} answer={answer} />
        <GuessInput
          handleSubmitGuess={handleSubmitGuess}
          gameStatus={gameStatus}
        />
      </div>
    </>
  );
}
