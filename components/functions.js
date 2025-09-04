import { WORDS } from "./../data/data";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}

export function checkGuess(guess, answer) {
  const answerLetters = answer.split("");

  return guess.split("").map((letter) => ({
    letter: letter,
    status: answerLetters.includes(letter) ? "correct" : "inCorrect",
  }));
}
