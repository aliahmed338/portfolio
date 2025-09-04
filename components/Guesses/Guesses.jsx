import GuessCells from "../GuessCells/GuessCells";
import { range } from "../../utils";
import "./Guesses.css";
export default function Guesses({ guesses, answer }) {
  return (
    <>
      {range(5).map((num) => (
        <GuessCells guess={guesses[num] || ""} answer={answer} />
      ))}
    </>
  );
}
