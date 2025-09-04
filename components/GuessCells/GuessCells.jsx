import "./GuessCells.css";
import { range } from "../../utils";
import { checkGuess } from "../functions";

export default function GuessCells({ guess, answer }) {
  const result = checkGuess(guess, answer);

  function Cell({ letter, status }) {
    return <span className={`letter ${status}`}>{letter}</span>;
  }
  return (
    <p className="box">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result?.[num]?.letter || ""}
          status={result?.[num]?.status || ""}
        />
      ))}
    </p>
  );
}
