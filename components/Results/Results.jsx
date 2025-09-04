import { div } from "framer-motion/client";
import "./Results.css";

export default function Results({ gameStatus, guesses, answer, restartGame }) {
  return (
    <>
      {gameStatus === "won" && (
        <div className="result">
          <p>
            Congratulations! You nailed it in
            <strong>{guesses.length}</strong> guesses! ✨{" "}
          </p>
          <p className="reset" onClick={() => restartGame()}>
            try again
          </p>
        </div>
      )}
      {gameStatus === "running" && (
        <div className="result">
          <p>🎮 Guess the 5-letter word! You have 5 tries.</p>
        </div>
      )}
      {gameStatus === "lose" && (
        <div className="result">
          <p>
            😢 Oh no! The correct answer was <strong>{answer}.</strong>{" "}
          </p>
          <p className="reset" onClick={() => restartGame()}>
            try again
          </p>
        </div>
      )}
    </>
  );
}
