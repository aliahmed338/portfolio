import { useState } from "react";
import "./GuessInput.css";

export default function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guessWord, setGuessWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (guessWord.length < 5) {
      alert("enter 5 letters 😊");
      return;
    }
    handleSubmitGuess(guessWord);
    setGuessWord("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        value={guessWord}
        onChange={(event) => {
          setGuessWord(event.target.value.toUpperCase());
        }}
        className="input"
        id="guess-input"
      />
    </form>
  );
}
